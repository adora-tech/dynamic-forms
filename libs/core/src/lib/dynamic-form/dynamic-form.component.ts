import { Component, DoCheck, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { DynamicFormGroup } from '../dynamic-form-group/dynamic-form-group';
import { DynamicFormTemplate } from './dynamic-form-template';
import { DynamicFormBuilder } from './dynamic-form.builder';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnChanges, OnDestroy, DoCheck {
  private _formField: DynamicFormGroup;

  @Input() template: DynamicFormTemplate;
  @Input() model: any;

  constructor(private formBuilder: DynamicFormBuilder) {}

  get formField() { return this._formField; }
  get formGroup() { return this._formField.control; }

  ngDoCheck() {
    this._formField.check();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.template || changes.model) {
      this.model = this.model || {};
      this._formField = this.formBuilder.createForm(this.template, this.model);
    }
  }

  ngOnDestroy() {
    this._formField.destroy();
  }

  submit() {
    console.log('form.value', this.formField.control.value);
  }
}