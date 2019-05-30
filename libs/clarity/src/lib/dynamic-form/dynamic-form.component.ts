import { Component } from '@angular/core';
import { DynamicFormBuilder, DynamicFormComponent } from '@dynamic-forms/core';

@Component({
  selector: 'clr-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class ClrDynamicFormComponent extends DynamicFormComponent {
  constructor(protected formBuilder: DynamicFormBuilder) {
    super(formBuilder);
  }
}
