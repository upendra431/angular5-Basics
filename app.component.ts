import { Component , OnInit} from '@angular/core';
import {Product } from './product.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
product: Product;
ngOnInit()
{
this.product={
id:'po1',
name:'Upendra Kumar',
photo: '1.jpeg',
price:20,
quantity:10,
color:'red'
};
}
}
