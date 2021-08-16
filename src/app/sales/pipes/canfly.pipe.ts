import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'canfly'
})

export class CanFlyPipe implements PipeTransform{

    transform(canFly: boolean):string{
        return (canFly)? "This heroe can Fly": "This heroe can't Fly"
    }
}