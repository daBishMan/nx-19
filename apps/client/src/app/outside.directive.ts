import { Directive, ElementRef, HostListener, output } from '@angular/core';

@Directive({
  selector: '[appOutside]',
  standalone: true,
})
export class OutsideDirective {
  clickOutside = output<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.clickOutside.emit();
    }
  }
}
