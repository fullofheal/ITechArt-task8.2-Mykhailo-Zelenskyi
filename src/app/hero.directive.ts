import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHero]',
})
export class HeroDirective {
  backgroudColors = {
    default: '#c4c3c3',
    hovered: '#2b76f6',
  };

  @HostBinding('style.background-color') backgroundColor: string =
    this.backgroudColors.default;

  @HostListener('mouseover') onMouseEnter() {
    this.backgroundColor = this.backgroudColors.hovered;
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = this.backgroudColors.default;
  }
}
