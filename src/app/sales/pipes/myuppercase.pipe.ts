import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name:'myuppercase'
})

export class MyUppercasePipe implements PipeTransform {
    
    transform(value: string, isUppercase:boolean = true ):string{
        return (isUppercase)? value.toUpperCase() : value.toLowerCase();
    }
}