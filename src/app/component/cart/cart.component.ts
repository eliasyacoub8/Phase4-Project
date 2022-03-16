import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product : any=[];
  public totalamount !: number;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.product = res;
      this.totalamount=this.cartService.getTotalPrice();
    })
  }
  deleteItem(item : any){
    this.cartService.removeCartItem(item);
  }
  removeallitems(){
    this.cartService.deletewholecart();

  }

}
