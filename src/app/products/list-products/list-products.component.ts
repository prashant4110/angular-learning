import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/model/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  // comment thease line and make private the connstructor item will same thing.
  // private httpClient: HttpClient;
  public data: Array<product>;
  constructor(private httpClient: HttpClient) {
    // this.httpClient=httpClient;
    this.data= new Array<product>();
    const url="http://localhost:9000/products";
    this.httpClient.get<Array<product>>(url)
                  .subscribe((data) => {
                    console.log("data",data);
                    this.data=data;
                    
                  })
   }

  ngOnInit(): void {

    // ng generate component products\list-products--- to create component.
  // import the component in app module.ts declaration
  // run this code in administrator cmd prompt.
  // --dry-run at the end of ng generate shows what it should generate.
  }

}
