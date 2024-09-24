import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  display:boolean=true;
  temp:any;
  data:any;
  newData:any;
  deletedItem:any;
  // src/app/models/user.model.ts
  @ViewChild('myButton') button!: ElementRef;

  constructor(private http:HttpClient){
         
  }
ngOnInit(): void {
  this.onChange();
  this.getData();
}
  onChange(){
   // console.log(this.display);
    this.display=!this.display;
  //  console.log(this.display);
    if(this.display==false){
      this.temp="Not Show";
    }
    else{
      this.temp="Show"
      this.getData();
    }
    //console.log(this.temp);
  }

  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res=>this.data=res)
    this.newData=this.data
  }
  onDelete(id:any){
   // if(this.display==false){
     this.data=this.data.filter((num:any)=>num.id!=id)
   //}
}

}
