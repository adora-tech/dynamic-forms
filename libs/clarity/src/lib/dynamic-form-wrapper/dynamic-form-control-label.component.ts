import { AfterViewInit, Component, ViewContainerRef } from '@angular/core';
import { DynamicFormWrapper } from '@dynamic-forms/core';

@Component({
  selector: 'clr-dynamic-form-control-label',
  templateUrl: './dynamic-form-control-label.component.html',
  styleUrls: ['./dynamic-form-control-label.component.scss']
})
export class ClrDynamicFormControlLabelComponent extends DynamicFormWrapper implements AfterViewInit {
  constructor(protected containerRef: ViewContainerRef) {
    super(containerRef);
  }
}
