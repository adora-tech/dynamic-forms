import { AfterViewInit, Component, ViewContainerRef } from '@angular/core';
import { DynamicFormWrapper } from '@dynamic-forms/core';

@Component({
  selector: 'clr-dynamic-form-label-wrapper',
  templateUrl: './dynamic-form-label-wrapper.component.html',
  styleUrls: ['./dynamic-form-label-wrapper.component.scss']
})
export class DynamicFormLabelWrapperClarityComponent extends DynamicFormWrapper implements AfterViewInit {
  constructor(protected containerRef: ViewContainerRef) {
    super(containerRef);
  }
}
