import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
          {
            label: 'Angular pipes',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'text and dates',
                icon: 'pi pi-align-left',
                routerLink: 'basics'
              },
              {
                label: 'Numbers',
                icon: 'pi pi-dollar',
                routerLink: 'numbers'
              },
              {
                label: 'No Common',
                icon: 'pi pi-globe',
                routerLink: 'no-commons'
              }

            ]
          },
          {
            label: 'Custom pipes',
            icon: 'pi pi-cog',
            items: [
              
            ]
          }
   ];
  }

}
