import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'pipes app';
  subheader: string = "subheader property"

  upper(){
   this.title =  this.title.toUpperCase()
  }
}
