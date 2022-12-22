import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  mapButton = false;
  bottomBar = true;
  isDown = false;
  tempNum = 0;

  //bottomdiv = document.getElementsByClassName('bottom');
  //elements= (<HTMLCollection>document.getElementsByClassName('bottom'));
  bottomdiv = document.getElementsByClassName("bottom") as HTMLCollectionOf<HTMLElement>;
  mapDiv = document.getElementsByClassName("map-button") as HTMLCollectionOf<HTMLElement>;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event:any) {
    
    const yPixel = window.scrollY;
    const divBottom = this.bottomdiv[0];
    const divMap = this.mapDiv[0];
    
    if (yPixel >= 150){
      this.mapButton = true;
    }
    else {
      this.mapButton = false;
    }
    if (yPixel > this.tempNum){
      this.isDown = true;
    } else {
      this.isDown = false;
    }
    if (this.isDown) {
      //divBottom.style.visibility = "hidden";
      //divBottom.style.transition = "opacity 1s";
      //divBottom.style.opacity = "0";
      divBottom.style.transition = "transform 0.5s";
      divBottom.style.transform = "translateY(60px)";
      divMap.style.transition = "transform 0.5s";
      divMap.style.transform = "translateY(60px)";
      
  
    } else {
      //divBottom.style.visibility = "visible";
      //divBottom.style.transition = "opacity 1s";
      //divBottom.style.opacity = "1";
      divBottom.style.transition = "transform 0.5s";
      divBottom.style.transform = "translateY(0px)";
      divMap.style.transition = "transform 0.5s";
      divMap.style.transform = "translateY(0px)";
    }
    this.tempNum = yPixel;
  }
}
