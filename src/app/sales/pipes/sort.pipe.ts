import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(heroes: Heroe[], sortBy: string = ""): Heroe[] {
    switch (sortBy) {
      case "name":
        return heroes.sort((a,b) => (a.name > b.name)? 1 : -1)
        break;
      case "canFly":
        return heroes.sort((a,b) => (a.canFly > b.canFly)? -1 : 1)
        break;
      case "color":
        return heroes.sort((a,b) => (a.primaryColor > b.primaryColor)? 1 : -1)
        break;

      default: return heroes
        break;
    }
  }
}
