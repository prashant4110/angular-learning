import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    ListProductsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    ListProductsComponent
  ]
})
export class ProductsModule { 

  // ng generate module products--- to create Module.
  // import the module in app module.ts
  // run this code in administrator cmd prompt.
  // --dry-run at the end of ng generate shows what it should generate.

}
