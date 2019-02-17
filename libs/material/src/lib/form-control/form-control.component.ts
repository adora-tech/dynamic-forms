import { Component } from '@angular/core';
import { FormControlComponent } from '@dynamic-forms/core';
import { FormControlFactory } from '@dynamic-forms/core';

@Component({
  selector: 'material-form-control',
  templateUrl: './form-control.component.html'
})
export class MaterialFormControlComponent extends FormControlComponent {
  constructor(componentFactory: FormControlFactory) {
    super(componentFactory);
  }
}
