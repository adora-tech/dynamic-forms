import { Injectable } from '@angular/core';
import { FormFieldBuilder } from '../form-field/form-field.builder';
import { FormField } from '../form-field/models/form-field';
import { FormArrayField } from './models/form-array-field';
import { FormArrayTemplate } from './models/form-array-template';

@Injectable()
export class FormArrayBuilder extends FormFieldBuilder<FormArrayTemplate, FormArrayField> {
  createField(root: FormField, parent: FormField, template: FormArrayTemplate) {
    const field = new FormArrayField(root, parent, template);
    field.setFields([]);
    return field;
  }
}
