import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuotesDirective {
  constructor(private elem: ElementRef) {
  }
  @HostListener("click") onClicks() {
    this.textDeco("yellowgreen");
  }
  @HostListener("dblclick") onDoubleClicks() {
    this.textDeco("black");
  }
  private textDeco(action: string) {
    this.elem.nativeElement.style.color = action;
  }
}
