import { FormGroup, FormArray, FormControl } from '@angular/forms';

export type FormTemplateType = 'group' | 'array' | 'control';
export type FormControlType = FormGroup | FormArray | FormControl;

export interface FormFieldTemplate {
  key: string;
  type: FormTemplateType;
  label: string;
  hidden?: boolean;
  disabled?: boolean;
  expressions?: { [key: string]: string };
}

export type ExpressionFunction = Function;
export type ExpressionDependency = string;

export interface Expression<T = any> {
  deps: ExpressionDependency[];
  func: ExpressionFunction;
  value: T;
}

export interface FormExpressions {
  [key: string]: Expression<any>;
}

export interface FormFieldExpression<T = any> extends Expression<T> {
  field: FormField;
}

export interface FormFieldExpressions extends FormExpressions {
  label?: Expression<string>;
  hidden?: FormFieldExpression<boolean>;
  disabled?: FormFieldExpression<boolean>;
}

export interface FormField {
  readonly path: string;
  readonly root: FormField;
  readonly parent: FormField;
  readonly template: FormFieldTemplate;
  expressions?: FormFieldExpressions;
  control: FormControlType;
  fields?: FormField[];
  model: any;

  destroy(): void;
}