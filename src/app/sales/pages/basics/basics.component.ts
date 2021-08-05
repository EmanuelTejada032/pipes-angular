import { Component  } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
  lowerName: string = "emanuel"
  upperName: string = "EMANUEL"
  name: string = "EmAnuEl"

  date: Date = new Date();
  
}
