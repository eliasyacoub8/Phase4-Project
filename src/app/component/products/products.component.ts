import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //property to store all the prod ucts list coming from the api
  public productList : any;
  public Categoryfiltered:any;
  searchKey:string="";
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    //call that particular service
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.Categoryfiltered = res;
      this.productList.forEach((a:any)=>{
       
        Object.assign(a,{quantity:1,total:a.price});

      });
    }) ;
    this.cartService.search.subscribe((val :any)=>{
      this.searchKey=val;
    })
  }
addtoCart(item : any){
 this.cartService.addtoCart(item);
  
}
filterbyCategory(category:string){
this.Categoryfiltered=this.productList
.filter((a:any)=>{
  if(a.category==category ||category==''){
    return a;
  }
})
}
}
