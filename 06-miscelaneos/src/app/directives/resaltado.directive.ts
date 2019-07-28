import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementRef:ElementRef) {
    console.log("Directiva llamada")

    //elementRef.nativeElement.style.backgroundColor = "yellow";

  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') MouseEntro(){
    this.resaltar(this.nuevoColor || "yellow");
  }

  @HostListener('mouseleave') MouseSalio(){
    this.resaltar(null);
  }

  private resaltar(color:string){
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
