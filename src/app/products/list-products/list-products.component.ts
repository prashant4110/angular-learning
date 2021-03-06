import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  // comment thease line and make private the connstructor item will same thing.
  // private httpClient: HttpClient;
  public data: Array<Product>;
  public searchKey:string;
  public nproduct: Product=new Product();
  // specified the data type may be product or null.
  public selectedProduct : Product | null = null;
  constructor(private httpClient: HttpClient) {
    // this.httpClient=httpClient;
    this,this.searchKey="";
    this.data= new Array<Product>();
    const url="http://localhost:9000/products";
    this.httpClient.get<Array<Product>>(url)
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
  saveProduct(){
    this.data.push(this.nproduct);
    this.nproduct=new Product();
  }
  editProduct(product:Product){
    this.selectedProduct= product;
  }

  editCancelled(msg:string){
    alert("edit cancel: "+msg);
    this.selectedProduct=null;
  }
  editUpdated(updatedProduct: Product){
    const index=this.data.findIndex(item => item.id===updatedProduct.id);
    if(index!==-1){
      this.data[index]=updatedProduct;
      this.selectedProduct=null;
    }
  }

}
