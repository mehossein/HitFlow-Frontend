import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'hf-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() padding: number = 5;
  @Input() margin: number = 5;
  @Input() borderRadius: number = 8;
  @Input() shadow: shadowType = 'card';
  @Input() color?: string;

  constructor() {}

  ngOnInit(): void {}

  addPx(paddingNumber: number): string {
    return `${paddingNumber}px`;
  }

  onChangeShadow(shadow: shadowType): string {
    switch (shadow) {
      case 'card-raised':
        return '0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)';
      case 'dialog':
        return '0px 2px 8px rgba(40, 41, 61, 0.08), 0px 20px 32px rgba(96, 97, 112, 0.24)';
      case 'popup':
        return '0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)';
      case 'card':
      default:
        return '0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)';
    }
  }
}

type shadowType = 'card' | 'dialog' | 'card-raised' | 'popup';
