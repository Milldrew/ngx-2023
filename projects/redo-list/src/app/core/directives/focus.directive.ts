import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[milldrewFocus]',
})
export class FocusDirective implements AfterViewInit {
  constructor(private host: ElementRef) {}

  ngAfterViewInit() {
    this.host.nativeElement.focus();
  }
}
