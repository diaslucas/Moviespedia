import { Component, Input } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  
  @Input() className: string;

  adaptImg(img, title){

    if(title.offsetWidth >= img.offsetWidth){
      this.className = "img-title-bigger";
    }
   
  }
  

}

