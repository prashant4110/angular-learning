import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input: Array<Product>,searchKey: string): Array<Product> {
    if(!searchKey){
      return input;
    }else{
     return input.filter((Product) =>{
        return Product.id?.toString()===searchKey
        || Product.name?.toLowerCase().includes(searchKey.toLowerCase())
        || Product.description?.toLowerCase().includes(searchKey.toLowerCase())
        ||Product.price?.toString().includes(searchKey);
      })
    }
  }
// ng generate pipe products\filter --dry-run for creting pipes.

}
