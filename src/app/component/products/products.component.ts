import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { NgControl } from '@angular/forms';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnInit{
  public productList: any;
  constructor(private  apiService:  ApiService, private cartService :CartService)
  {

  }
  ngOnInit(): void {
    this.apiService.getProducts().subscribe(res=>{
      this.productList=res;
       this.productList.forEach((a:any) => {
        Object.assign(a,{quantity: 1, total : a.price})
       });
    })
    
  }

  addToCart(item:any)
  {
    this.cartService.addToCart(item);
  }

  

}
