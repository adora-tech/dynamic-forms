import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControlField } from './models/form-control.field';
import { FormControlFactory } from './form-control.factory';
import { FormFieldBase} from '../form-field';

@Component({
  selector: 'dynamic-form-control',
  templateUrl: './form-control.component.html'
})
export class FormControlComponent extends FormFieldBase<FormControlField> implements OnInit {
  @ViewChild('inputComponent', { read: ViewContainerRef })
  containerRef: ViewContainerRef;

  constructor(private componentFactory: FormControlFactory) {
    super();
  }

  get input() { return this.formField.template.input; }

  ngOnInit() {
    this.initComponent();
  }

  private initComponent() {
    this.componentFactory.createComponent(this.containerRef, this.formField);
  }
}
