import { Injectable } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';
import { FormControlTemplate, FormControlField } from './form-control.model';
import { FormFieldBuilder } from '../form-field/form-field.builder';
import { FormValidationBuilder } from '../form-validation/form-validation.builder';
import { FormField } from '../form-field';

@Injectable()
export class FormControlBuilder extends FormFieldBuilder {
  constructor(private validationBuilder: FormValidationBuilder) {
    super();
  }

  createField(root: FormField, parent: FormField, template: FormControlTemplate) {
    const field = new FormControlField(root, parent, template);
    field.expressions = this.createExpressions(field);
    this.assignExpressions(field.template, field.expressions);
    field.control = this.createControl(field, this.createValidators(field.template));
    return field;
  }

  private createValidators(template: FormControlTemplate) {
    if (template.validation) {
      return Object.keys(template.validation)
        .map(key => this.createValidator(template, key))
        .filter(validator => !!validator);
    }
    return [];
  }

  private createValidator(template: FormControlTemplate, key: string) {
    const value = template.input[key];
    return this.validationBuilder.createValidator(template.validation, key, value);
  }

  private createControl(field: FormField, validators: ValidatorFn[]) {
    const control = new FormControl(field.model, validators);
    control.valueChanges.subscribe(value => {
      field.parent.model[field.template.key] = value;
      field.model = value;
    });
    return control;
  }
}