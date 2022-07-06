import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBinding } from './dataBinding/databinding.component';
import { HelloComponent } from './hello/hello.component';
import { ProductsModule } from './products/products.module';
import{RouterModule,Routes} from '@angular/router';
import { Product } from './model/product';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { GadgetsModule } from './gadgets/gadgets.module';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';

// configure the routes
const routes: Routes=[
  {path: "",redirectTo:"/home", pathMatch:"full"},
  {path: "home",component:HelloComponent},
  {path: "binding",component:DataBinding},
  {path: "search",component:SearchComponent},
  {path: "**",component:RouteNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataBinding,
    RouteNotFoundComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    GadgetsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
