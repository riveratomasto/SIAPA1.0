import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    const resultData = [];
    for(const data of value){
      if(data.Nombre.toLowerCase().indexOf(args) > -1 || data.Apellido.toLowerCase().indexOf(args) > -1){
        resultData.push(data)
      }
    }
    return resultData;
  }

}
