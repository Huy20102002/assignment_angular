import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkScore'
})
export class CheckScorePipe implements PipeTransform {

  transform(value: any): any {
    if(value >= 5){
      return `Passed`;
    }else{
      return "Failled";
    }
  }

}
