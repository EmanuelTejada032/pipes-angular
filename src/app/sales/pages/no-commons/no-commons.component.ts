import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent implements OnInit {

  name: string = "Emanuel"
  gender: string = "male"

  // customers: string[] = ["Anthony", "Ramon", "Marcos"]
   customers: any[] = [{name:"Anthony", gender: "male"},{name:"Ana", gender: "female"}, {name:"Ramon", gender: "male"},{name:"Maria", gender: "female"}]

  // pass the map options to the i18nselect 
  matchGenderMap = {
    "male": "his",
    "female": "her"
  }
  
  displayMessageMap = {
    "=0": " No customers waiting for service", // condition: messagetodisplay
    "=1": "1 customer is waiting for service",
    "other": " # customers are waiting for service"
  }

  constructor() { }

  ngOnInit(): void {
  }
  selectRandomCustomer(){
    let randomCustomer = Math.floor(Math.random()*this.customers.length)
    this.name = this.customers[randomCustomer].name
    this.gender = this.customers[randomCustomer].gender
  }
  deleteCustomer(){
    console.log("Deleted customer", this.customers.pop() )
    console.log("Customer list", this.customers)
  }

}
