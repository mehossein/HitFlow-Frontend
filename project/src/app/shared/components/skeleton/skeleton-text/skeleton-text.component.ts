import { Component, Input } from '@angular/core';
import { SkeletonHandler } from '@shared/interface/skeleton.interface';

@Component({
  selector: 'hf-skeleton-text',
  templateUrl: './skeleton-text.component.html',
})
export class SkeletonTextComponent implements SkeletonHandler {
  @Input() show: boolean = false;
  constructor() {}
}
