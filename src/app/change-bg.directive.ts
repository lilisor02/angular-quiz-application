import { Directive, ElementRef, Input, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isCorrect : Boolean = false;
  constructor(private el : ElementRef, private render : Renderer2) { }

  @HostListener('click') answer(){
    if(this.isCorrect) {
      this.render.setStyle(this.el.nativeElement, "background", "#AEC3AE");
      this.render.setStyle(this.el.nativeElement, "border", "2px solid grey");
    } else {
      this.render.setStyle(this.el.nativeElement, "background", "#FFEEF4");
      this.render.setStyle(this.el.nativeElement, "border", "2px solid grey");
    }
  }

}
