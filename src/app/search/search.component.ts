import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take,tap,map,filter,debounceTime } from 'rxjs/operators';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchFormGroup:FormGroup;

  constructor(private httpClient:HttpClient) {
    // interval(1000)
    // .pipe(
    //   take(10),
    //   filter(x => x%2===0),
    //   map(x => x*x)
    // )
    //   .subscribe(result => console.log("in subscribe",result)
    //   );

    this.searchFormGroup=new FormGroup({
      searchCtrl: new FormControl("",[Validators.required,Validators.minLength(3)],[])
    })
   }

  ngOnInit(): void {
    const searchCtrl =this.searchFormGroup.get("searchCtrl");
    this.searchFormGroup
            .get("searchCtrl")
            ?.valueChanges
            .pipe(
              filter(v => searchCtrl?.valid===true),
              debounceTime(1000)
            )
            .subscribe(value => {
              console.log(value);
              const url="https://en.wikipedia.org/w/api.php";
              var params= new HttpParams ()
                              .set("action","opensearch")
                              .set("search", value)
                              .set("limit", 20)
                              .set ("origin","*")
              this.httpClient
                  .get(url,{params})
                  .pipe(
                    map((data:any) => data[1])
                  )
                  .subscribe((data)=>{
                    console.log(data);
                    
                  });
              
            });
  }

}
