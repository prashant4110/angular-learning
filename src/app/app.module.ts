import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBinding } from './dataBinding/databinding.component';
import { HelloComponent } from './hello/hello.component';
import { ProductsModule } from './products/products.module';
import{RouterModule,Routes} from '@angular/router';
import { Product } from './model/product';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { GadgetsModule } from './gadgets/gadgets.module';

// configure the routes
const routes: Routes=[
  {path: "",redirectTo:"/home", pathMatch:"full"},
  {path: "home",component:HelloComponent},
  {path: "binding",component:DataBinding},
  {path: "**",component:RouteNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataBinding,
    RouteNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    GadgetsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
