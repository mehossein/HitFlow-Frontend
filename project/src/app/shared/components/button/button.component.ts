import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hf-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() padding?: number; //rem
  @Input() paddingX?: number; //rem
  @Input() paddingY?: number;
  @Input() colorScheme: ColorScheme = 'primary';
  @Input() hasLoading: boolean = false;
  @Input() hasDisable: boolean = false;
  @HostBinding('class')
  demoRootCssClass = '';

  constructor() {}

  ngOnInit(): void {
    this.demoRootCssClass = this._styleHandler(
      this.colorScheme,
      this.hasLoading,
      this.hasDisable
    );
  }

  private _styleHandler(
    colorScheme: ColorScheme,
    hasLoading: boolean,
    hasDisable: boolean
  ): string {
    const defaultButtonClass: string = ' btn border-0 ';
    const loadingStyle: string = hasLoading ? ' loading ' : '';
    const disableStyle: string = hasDisable ? ' btn-disabled ' : '';
    let classResponse: string = '';
    if (!hasDisable)
      switch (colorScheme) {
        case 'destructive':
          classResponse = ` inline-flex items-center px-5 py-2 bg-destructive hover:bg-destructive-hover foucs:bg-destructive-focus text-main   rounded-md`;
          break;

        case 'positive':
          classResponse = ` inline-flex items-center px-5 py-2 bg-positive hover:bg-positive-hover foucs:bg-positive-focus text-main   rounded-md`;
          break;

        case 'primary':
          classResponse = ` inline-flex items-center px-5 py-2 bg-primary hover:bg-primary-hover foucs:bg-primary-focus text-main   rounded-md`;
          break;

        case 'text':
        default:
          classResponse =
            ' inline-flex items-center px-4 py-2 bg-positive hover:bg-positive-hover foucs:bg-positive-focus text-main   rounded-md';
      }
    return defaultButtonClass + loadingStyle + classResponse + disableStyle;
  }
}

export type ColorScheme = 'primary' | 'destructive' | 'positive' | 'text';
