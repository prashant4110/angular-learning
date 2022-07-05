export class Product{
    
// ? used to make it optional
    constructor(public id?: number,public name?:string, public price?: number,public description?:string,public imageUrl?:string){

    }
}