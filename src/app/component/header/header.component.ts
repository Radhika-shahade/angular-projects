import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  totalItem : number=0;
  constructor (private cartService :CartService){}
  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{this.totalItem =res.length})
  }


}
