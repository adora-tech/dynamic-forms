import { FormControl, ValidatorFn } from '@angular/forms';
import { FormField, FormFieldTemplate } from '../../form-field';
import { FormControlTemplate } from './form-control.template';
import { Subscription } from 'rxjs';

export interface FormControlValidator {
  key: string;
  enabled: boolean;
  value: any;
  factory: (value: any) => ValidatorFn;
  validator: ValidatorFn;
}

export type FormControlValidators = FormControlValidator[];

export class FormControlField extends FormField<FormControlTemplate, FormControl> {
  protected _controlValue: Subscription;
  protected _validators: FormControlValidators;

  constructor(root: FormField, parent: FormField, template: FormControlTemplate) {
    super(root, parent, template);
    this._model = this.getModel(parent, template);
    this._control = new FormControl(this._model);
    this._controlValue = this._control.valueChanges.subscribe(value => {
      this.parent.model[this.template.key] = value;
      this._model = value;
    });
  }

  setValidators(validators: FormControlValidators) {
    this._validators = validators;
    const controlValidators = this.getControlValidators();
    this._control.setValidators(controlValidators);
  }

  check() {
    this.checkControl();
    this.checkValidators();
  }

  destroy() {
    this._controlValue.unsubscribe();
  }

  private getModel(parent: FormField, template: FormFieldTemplate): any {
    parent.model[template.key] = parent.model[template.key] || null;
    return parent.model[template.key];
  }

  private getControlValidators() {
    return this._validators.filter(validator => validator.enabled)
      .map(validator => validator.validator);
  }

  private checkControl(): void {
    const disabled = this.parent.control.disabled || this.template.disabled || false;
    if (this.control.disabled !== disabled) {
      if (disabled) {
        this.control.disable();
      } else {
        this.control.enable();
      }
    }
  }

  private checkValidators() {
    const validatorsChanged = this.validatorsChanged();
    if (validatorsChanged) {
      this.control.setValidators(this.getControlValidators());
      this.control.updateValueAndValidity();
    }
  }

  private validatorsChanged(): boolean {
    return this._validators.some(validator => {
      const enabled = this.template.validation[validator.key];
      const value = this.template.input[validator.key];
      if (validator.enabled !== enabled || validator.value !== value) {
        validator.enabled = enabled;
        validator.value = value;
        validator.validator = enabled ? validator.factory(value) : null;
        return true;
      }
      return false;
    });
  }
}
