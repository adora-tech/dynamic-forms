import { Component, Input } from '@angular/core';
import { FormValidationErrors } from './form-validation.model';
import { FormValidationConfig, defaultFormValidationConfig } from './form-validation.config';

@Component({
  selector: 'dynamic-form-validation',
  templateUrl: './form-validation.component.html'
})
export class FormValidationComponent {
  private readonly config: FormValidationConfig = defaultFormValidationConfig;

  @Input() errors: FormValidationErrors;

  get message(): string {
    const key = Object.keys(this.errors)[0];
    if (key) {
      const error = this.errors[key];
      return error.message || this.config.messages[key] || this.config.defaultMessage;
    }

    return this.config.defaultMessage;
  }
}
