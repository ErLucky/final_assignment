import { LocationStrategy } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(  private http: HttpClient

  ) {

  }
  columns: any = []; 
  ngOnInit() {
    const EN_FILE_PATH = "assets/i18n/test.json";
  
    this.http.get(EN_FILE_PATH).subscribe(data => {
      this.columns = data['grids']['zones'];
     console.log(this.columns);
    }, error => console.error("Error ---> ", error));
   
  }

zoomin(){
    var myImg = document.getElementById("img");
    var myImg1 = document.getElementById("img1");
    var myImg2 = document.getElementById("img2");
    var currWidth = myImg.clientWidth;
    var currHeigth = myImg.clientHeight;
  
        myImg.style.width = (currWidth + 50) + "px";
        myImg.style.height = (currHeigth + 50) + "px";
        myImg1.style.width = (currWidth + 50) + "px";
        myImg1.style.height = (currHeigth + 50) + "px";
        myImg2.style.width = (currWidth + 50) + "px";
        myImg2.style.height = (currHeigth + 50) + "px";
    
}

zoomout(){
    var myImg = document.getElementById("img");
    var myImg1 = document.getElementById("img1");
    var myImg2 = document.getElementById("img2");
    var currWidth = myImg.clientWidth;
    var currHeigth = myImg.clientHeight;
    if(currWidth == 300 || currHeigth == 400){
        alert("Maximum zoom-out level reached.");
    } else{
        myImg.style.width = (currWidth - 50) + "px";
        myImg.style.height = (currHeigth - 50) + "px";
        myImg1.style.width = (currWidth - 50) + "px";
        myImg1.style.height = (currHeigth - 50) + "px";
        myImg2.style.width = (currWidth - 50) + "px";
        myImg2.style.height = (currHeigth - 50) + "px";
    }

}
}
