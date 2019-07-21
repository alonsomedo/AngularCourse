import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, encryp:boolean = true): any {
    

    let length = value.length;
    let valor:string = "";
  
    if(encryp){

      for(let i=0; i<length; i++)
      {
        valor = valor + "*";
      }
      return valor;
    }else{
      return value;
    }
  }

}
