import { Component, Input } from '@angular/core';
import { SkeletonHandler } from '@shared/interface/skeleton.interface';

@Component({
  selector: 'hf-skeleton-card',
  templateUrl: './skeleton-card.component.html',
})
export class SkeletonCardComponent implements SkeletonHandler {
  @Input()show: boolean = false;

  constructor() { }
}
