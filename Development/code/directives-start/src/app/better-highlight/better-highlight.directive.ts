import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';
//another decorator can let us avoid using the renderer, HostBinding

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    //takes the element to style, the style property to set, the value and, lastly, a flag (optional).
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false);
    this.backgroundColor = 'blue'
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false);
    this.backgroundColor = 'transparent';
  }
}
