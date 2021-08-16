import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent implements OnInit {
  isUppercase: boolean = true;
  name: string = "Emanuel Tejada Coste"

  heroes: Heroe[] = [
    {
      name: "Supermamn",
      canFly: true,
      primaryColor: Color.blue
    },
    {
      name: "Batman",
      canFly: false,
      primaryColor: Color.black
    },
    {
      name: "Robin",
      canFly: false,
      primaryColor: Color.green
    },
    {
      name: "Green Lantern",
      canFly: true,
      primaryColor: Color.green
    },
    {
      name: "Daredevil",
      canFly: false,
      primaryColor: Color.red
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleCase(){
    console.log(this.isUppercase)
    this.isUppercase = !this.isUppercase
  }

}
