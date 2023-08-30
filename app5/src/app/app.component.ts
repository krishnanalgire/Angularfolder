import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app5';
msg:string = "Welcomre to anguler"
  constructor(@Inject(HttpClient) private httpClint:HttpClient)
  {
    
  }
  getMessage(){
        this.httpClint.get("http://localhost:8080/", {responseType :'text'})
          .subscribe(response => {
            this.msg=response;
          });
        
  }
  getWishMessage(){
    this.httpClint.get("http://localhost:8080/Wish", {responseType :'text'})
      .subscribe(response => {
        this.msg=response;
      });
}
}
