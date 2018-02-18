import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false;
  count = 0;
  color = '';
  textColor = '';
  onClicked(event: any){
    if (this.display) {
      this.display = false;
    } else
    this.display = true;
    this.count += 1;
    console.log(this.count);
  }
  getColor(){
    if(this.count>=5)
    return this.color = "blue";
  }
  getCount(){
    if(this.count>=5)
    return this.count
  }

}
