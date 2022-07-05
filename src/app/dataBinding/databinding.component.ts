import { Component } from "@angular/core";


@Component({
    selector: 'databinding',
    templateUrl:'./databinding.component.html'
})
export class DataBinding {
    public name:string;
    public count:number;
    public ctrlstring:string;
    public isvisible:boolean=false;
    constructor(){
        this.name="prashant gupta";
        this.count=10;
        this.ctrlstring="total count"
        // this.isvisible=false;
    }

    // default acces modifier is always public

    inc(evct:any){
        this.count++;
        console.log(evct);
        
    }

}