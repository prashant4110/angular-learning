import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // ng generate component products\list-products--- to create component.
  // import the component in app module.ts declaration
  // run this code in administrator cmd prompt.
  // --dry-run at the end of ng generate shows what it should generate.
  }

}
