import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit ,OnChanges{
  @Input()
  public product: Product=new Product();
  public temp: Product=new Product();
  @Output()
  public cancelled: EventEmitter<string>=new EventEmitter<string>();
  @Output()
  public saved: EventEmitter<Product>=new EventEmitter<Product>();

  constructor() {
    // deep copying from product to temp,, shallow copy that is this. temp=this.product refering the same location.
    // Object.assign(this.temp,this.product)
    console.log("[EditProductComponent constructor]", this.product);
   }
  

  ngOnInit(): void {
    // ng g c products/edit-product
     // deep copying from product to temp,, shallow copy that is this. temp=this.product refering the same location.
    //  Object.assign(this.temp,this.product)
    console.log("[EditProductComponent ngOnInit]", this.product);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("[EditProductComponent ngOnChanges]", changes);
    Object.assign(this.temp , this.product);
  }

  save(){
    // Object.assign(this.product,this.temp)
    this.saved.emit(this.temp)
  }
  cancel(){
this.cancelled.emit("edit was cancelled");
  }
}
