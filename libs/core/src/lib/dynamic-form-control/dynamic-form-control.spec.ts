import { FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DynamicFormElement } from '../dynamic-form-element/dynamic-form-element';
import { DynamicFormField } from '../dynamic-form-field/dynamic-form-field';
import { DynamicFormFieldExpression } from '../dynamic-form-field/dynamic-form-field-expression';
import { DynamicFormFieldExpressions } from '../dynamic-form-field/dynamic-form-field-expressions';
import { DynamicFormSelect } from '../dynamic-form-input/dynamic-form-select/dynamic-form-select';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { DynamicFormDefinition } from '../dynamic-form/dynamic-form-definition';
import { DynamicFormBuilder } from '../dynamic-form/dynamic-form.builder';
import { createDynamicFormBuilderSpy } from '../testing';
import { DynamicFormControl } from './dynamic-form-control';
import { DynamicFormControlDefinition } from './dynamic-form-control-definition';
import { DynamicFormControlEvaluator } from './dynamic-form-control-evaluator';
import { dynamicFormSelectEvaluatorFn } from './dynamic-form-control-evaluator-type';
import { DynamicFormControlValidator } from './dynamic-form-control-validator';

describe('DynamicFormControl', () => {
  let builder: jasmine.SpyObj<DynamicFormBuilder>;

  beforeEach(() => {
    builder = createDynamicFormBuilderSpy();
    builder.getFieldId.and.returnValue('fieldId');
  });

  it('creates instance', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', index: 1, type: 'componentType', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    expect(formControl.root).toBe(root);
    expect(formControl.parent).toBe(root);
    expect(formControl.parentField).toBe(root);

    expect(formControl.definition).toBe(definition);
    expect(formControl.template).toBe(definition.template);

    expect(formControl.key).toBe('key');
    expect(formControl.index).toBe(1);
    expect(formControl.path).toBe('key');
    expect(formControl.classType).toBe('field');
    expect(formControl.fieldClassType).toBe('control');
    expect(formControl.componentType).toBe('componentType');

    expect(formControl.model).toBeNull();
    expect(formControl.value).toBeNull();
    expect(formControl.valid).toBeTrue();
    expect(formControl.status).toBe('VALID');
    expect(formControl.control).toBeInstanceOf(FormControl);

    expect(formControl.children).toEqual([]);
    expect(formControl.footerActions).toEqual([]);
    expect(formControl.evaluators).toEqual([]);
    expect(formControl.validators).toEqual([]);

    expect(root.model).toEqual({ key: null });
  });

  const defaultValues = [ 'default', 0, false, '' ];
  defaultValues.forEach(defaultValue =>
    it(`creating instance sets model to default value '${defaultValue}'`, () => {
      const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
      const definition = { key: 'key', template: { input: { defaultValue } } } as DynamicFormControlDefinition;
      const formControl = new DynamicFormControl(builder, root, root, definition);

      expect(formControl.model).toBe(defaultValue);

      expect(root.model).toEqual({ key: defaultValue });
    }),
  );

  const items = [
    { settings: { updateType: undefined }, updateOn: 'change' },
    { settings: { updateType: 'change' }, updateOn: 'change' },
    { settings: { updateType: 'debounce' }, updateOn: 'change' },
    { settings: { updateType: 'debounce', updateDebounce: 0 }, updateOn: 'change' },
    { settings: { updateType: 'debounce', updateDebounce: 200 }, updateOn: 'change' },
    { settings: { updateType: 'blur' }, updateOn: 'blur' },
  ];
  items.forEach(item =>
    it(`creating instance sets update option '${item.settings}'`, () => {
      const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
      const definition = { key: 'key', template: {}, settings: item.settings } as DynamicFormControlDefinition;
      const formControl = new DynamicFormControl(builder, root, root, definition);

      expect(formControl.control.updateOn).toEqual(item.updateOn);
    }),
  );

  it('creating instance subscribes valueChanges of control value', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    formControl.control.setValue('value');

    expect(formControl.model).toBe('value');
    expect((formControl.parent as DynamicFormField).model.key).toBe('value');
  });

  it('creating instance subscribes valueChanges of control object', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);
    const obj = { value: 'value' };

    formControl.control.setValue(obj);

    expect(formControl.model).toBe(obj);
    expect((formControl.parent as DynamicFormField).model.key).toBe(obj);
  });

  it('creating instance subscribes debounced valueChanges of control value', (done) => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const settings = { updateType: 'debounce', updateDebounce: 200 };
    const definition = { key: 'key', template: {}, settings } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    formControl.control.setValue('value');
    formControl.check();

    expect(formControl.value).toBe('value');
    expect(formControl.model).toBeNull();
    expect((formControl.parent as DynamicFormField).model.key).toBeNull();

    of({}).pipe(delay(150)).subscribe({
      next: () => {
        expect(formControl.value).toBe('value');
        expect(formControl.model).toBeNull();
        expect((formControl.parent as DynamicFormField).model.key).toBeNull();
      },
    });

    of({}).pipe(delay(300)).subscribe({
      next: () => {
        expect(formControl.value).toBe('value');
        expect(formControl.model).toBe('value');
        expect((formControl.parent as DynamicFormField).model.key).toBe('value');
        done();
      },
    });
  });

  it('returns expression data with input', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', index: 1, type: 'componentType', template: { input: {} } } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    expect(formControl.expressionData.input).toBe(definition.template.input);
  });

  it('inits evaluators to empty', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    builder.createControlEvaluators.and.returnValue(null);

    formControl.init();

    expect(formControl.evaluators).toEqual([]);
  });

  it('inits evaluators', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);
    const formControlEvaluators = [ {} ] as DynamicFormControlEvaluator[];

    builder.createControlEvaluators.and.returnValue(formControlEvaluators);

    formControl.init();

    expect(formControl.evaluators).toBe(formControlEvaluators);
  });

  it('inits validators to empty', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    builder.createControlValidators.and.returnValue(null);

    formControl.init();

    expect(formControl.validators).toEqual([]);
  });

  it('inits validators', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);
    const formControlValidators = [
      { key: 'required', validatorFn: Validators.required },
    ] as DynamicFormControlValidator[];

    builder.createControlValidators.and.returnValue(formControlValidators);

    formControl.init();

    expect(formControl.validators).toBe(formControlValidators);
  });

  it('sets control validator to null', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    builder.createControlValidators.and.returnValue(null);

    formControl.init();
    formControl.control.updateValueAndValidity();

    expect(formControl.control.validator).toBeNull();
    expect(formControl.control.valid).toBe(true);
  });

  it('sets control validator', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);
    const formControlValidators = [
      { key: 'required', validatorFn: Validators.required },
    ] as DynamicFormControlValidator[];

    builder.createControlValidators.and.returnValue(formControlValidators);

    formControl.init();
    formControl.control.updateValueAndValidity();

    expect(formControl.control.validator).not.toBeNull();
    expect(formControl.control.valid).toBe(false);
  });

  it('check updates control value', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: { input: {} } } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    spyOn(formControl.control, 'setValue').and.callThrough();
    spyOn(formControl.control, 'markAsTouched');

    root.model['key'] = 'value';
    formControl.check();

    expect(formControl.model).toBe('value');
    expect(formControl.value).toBe('value');
    expect(formControl.control.setValue).toHaveBeenCalledWith('value', { onlySelf: true, emitEvent: false });
    expect(formControl.control.markAsTouched).toHaveBeenCalled();
  });

  it('check updates control disabled', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: { input: {} } } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    expect(formControl.control.disabled).toBe(false);

    formControl.template.disabled = true;
    formControl.check();

    expect(formControl.control.disabled).toBe(true);

    formControl.template.disabled = false;
    formControl.check();

    expect(formControl.control.disabled).toBe(false);
  });

  it('check updates control validators', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = {
      key: 'key',
      type: 'control',
      template: {
        input: { type: 'input' },
        validation: { required: true },
      },
    } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);
    const formControlValidators = [
      new DynamicFormControlValidator(_ => Validators.required, 'required', formControl),
    ] as DynamicFormControlValidator[];

    builder.createControlValidators.and.returnValue(formControlValidators);

    formControl.init();
    formControl.control.updateValueAndValidity();

    expect(formControl.control.valid).toBe(false);

    definition.template.validation.required = false;
    formControl.check();

    expect(formControl.control.valid).toBe(true);

    formControl.check();

    expect(formControl.control.valid).toBe(true);

    definition.template.validation.required = true;
    formControl.check();

    expect(formControl.control.valid).toBe(false);
  });

  it('destroy unsubscribes valueChanges of control', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    formControl.destroy();

    expect(formControl).toBeTruthy();
  });

  it('reset sets model to null', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, { key: 'value' });
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    expect(formControl.model).toBe('value');
    expect((formControl.parent as DynamicFormField).model.key).toBe('value');

    formControl.reset();

    expect(formControl.model).toBe(null);
    expect((formControl.parent as DynamicFormField).model.key).toBe(null);
  });

  it('resetEmpty sets model to null', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, { key: 'value' });
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    expect(formControl.model).toBe('value');
    expect((formControl.parent as DynamicFormField).model.key).toBe('value');

    formControl.resetEmpty();

    expect(formControl.model).toBe(null);
    expect((formControl.parent as DynamicFormField).model.key).toBe(null);
  });

  it('resetDefault sets model to default value', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: { input: {} } } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    expect(formControl.model).toBe(null);
    expect((formControl.parent as DynamicFormField).model.key).toBe(null);

    formControl.definition.template.input.defaultValue = 'value';
    formControl.resetDefault();

    expect(formControl.model).toBe('value');
    expect((formControl.parent as DynamicFormField).model.key).toBe('value');
  });

  it('validate calls markAsTouched of control', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: { input: {} } } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);

    spyOn(formControl.control, 'markAsTouched');

    formControl.validate();

    expect(formControl.control.markAsTouched).toHaveBeenCalled();
  });

  it('init calls calls initId, initExpressions, initValidators and initEvaluators', () => {
    const root = { classType: 'field', model: {} } as DynamicForm;
    const parent = {} as DynamicFormElement;
    const definition = { key: 'key', template: { input: {} } } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, parent, definition);

    const initIdSpy = spyOn(formControl as any, 'initId').and.callThrough();
    const initExpressionsSpy = spyOn(formControl as any, 'initExpressions').and.callThrough();
    const getExpressionsSpy = spyOn(formControl as any, 'getExpressions').and.callThrough();
    const initChildrenSpy = spyOn(formControl as any, 'initChildren').and.callThrough();
    const getChildrenSpy = spyOn(formControl as any, 'getChildren').and.callThrough();
    const initValidatorsSpy = spyOn(formControl as any, 'initValidators').and.callThrough();
    const getValidatorsSpy = spyOn(formControl as any, 'getValidators').and.callThrough();
    const initHeaderActionsSpy = spyOn(formControl as any, 'initHeaderActions').and.callThrough();
    const getHeaderActionsSpy = spyOn(formControl as any, 'getHeaderActions').and.callThrough();
    const initFooterActionsSpy = spyOn(formControl as any, 'initFooterActions').and.callThrough();
    const getFooterActionsSpy = spyOn(formControl as any, 'getFooterActions').and.callThrough();
    const initEvaluatorsSpy = spyOn(formControl as any, 'initEvaluators').and.callThrough();
    const getEvaluatorsSpy = spyOn(formControl as any, 'getEvaluators').and.callThrough();

    formControl.init();

    expect(initIdSpy).toHaveBeenCalledTimes(1);
    expect(builder.getFieldId).toHaveBeenCalledOnceWith(formControl);
    expect(initExpressionsSpy).toHaveBeenCalledTimes(1);
    expect(getExpressionsSpy).toHaveBeenCalledTimes(1);
    expect(builder.createFieldExpressions).toHaveBeenCalledOnceWith(formControl);
    expect(initChildrenSpy).toHaveBeenCalledTimes(1);
    expect(getChildrenSpy).toHaveBeenCalledTimes(1);
    expect(initValidatorsSpy).toHaveBeenCalledTimes(1);
    expect(getValidatorsSpy).toHaveBeenCalledTimes(1);
    expect(builder.createControlValidators).toHaveBeenCalledOnceWith(formControl);
    expect(initHeaderActionsSpy).toHaveBeenCalledTimes(1);
    expect(getHeaderActionsSpy).toHaveBeenCalledTimes(1);
    expect(initFooterActionsSpy).toHaveBeenCalledTimes(1);
    expect(getFooterActionsSpy).toHaveBeenCalledTimes(1);
    expect(builder.createFormActions).not.toHaveBeenCalled();
    expect(initEvaluatorsSpy).toHaveBeenCalledTimes(1);
    expect(getEvaluatorsSpy).toHaveBeenCalledTimes(1);
    expect(builder.createControlEvaluators).toHaveBeenCalledOnceWith(formControl);
  });

  it('inits expressions', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);
    const formControlExpressions = {
      required: { value: true } as DynamicFormFieldExpression,
      readonly: { value: false } as DynamicFormFieldExpression,
      'input.inputType': { value: 'text' } as DynamicFormFieldExpression,
    } as DynamicFormFieldExpressions;

    builder.createFieldExpressions.and.returnValue(formControlExpressions);

    formControl.init();

    expect(formControl.expressions).toBe(formControlExpressions);
    expect(formControl.template.required).toBe(true);
    expect(formControl.template.readonly).toBe(false);
    expect(formControl.template.input.inputType).toBe('text');
  });

  it('inits expressions, sets model and control value to default value', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);
    const formControlExpressions = {
      'input.defaultValue': { value: 'value' } as DynamicFormFieldExpression,
    } as DynamicFormFieldExpressions;

    spyOn(formControl.control, 'setValue').and.callThrough();
    spyOn(formControl.control, 'markAsTouched');

    builder.createFieldExpressions.and.returnValue(formControlExpressions);

    formControl.init();

    expect(formControl.expressions).toBe(formControlExpressions);
    expect(formControl.template.input.defaultValue).toBe('value');
    expect(formControl.model).toBe('value');
    expect(formControl.control.value).toBe('value');
    expect(formControl.control.setValue).toHaveBeenCalledWith('value', { onlySelf: true, emitEvent: false });
    expect(formControl.control.markAsTouched).not.toHaveBeenCalled();
  });

  it('inits expressions, but does not set model and control value to default value', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: {} } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);
    const formControlExpressions = {
      'input.defaultValue': { value: undefined } as DynamicFormFieldExpression,
    } as DynamicFormFieldExpressions;

    spyOn(formControl.control, 'setValue').and.callThrough();
    spyOn(formControl.control, 'markAsTouched');

    builder.createFieldExpressions.and.returnValue(formControlExpressions);

    formControl.init();

    expect(formControl.expressions).toBe(formControlExpressions);
    expect(formControl.template['input']['defaultValue']).toBeUndefined();
    expect(formControl.model).toBeNull();
    expect(formControl.control.value).toBeNull();
    expect(formControl.control.setValue).not.toHaveBeenCalled();
    expect(formControl.control.markAsTouched).not.toHaveBeenCalled();
  });

  it('inits validators', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: { input: {} } } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);
    const validators = [{}] as DynamicFormControlValidator[];

    builder.createControlValidators.and.returnValue(validators);

    formControl.init();

    expect(formControl.validators).toBe(validators);
  });

  it('inits evaluators', () => {
    const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {});
    const definition = { key: 'key', template: { input: {} } } as DynamicFormControlDefinition;
    const formControl = new DynamicFormControl(builder, root, root, definition);
    const evaluators = [{}] as DynamicFormControlEvaluator[];

    builder.createControlEvaluators.and.returnValue(evaluators);

    formControl.init();

    expect(formControl.evaluators).toBe(evaluators);
  });

  describe('DynamicFormSelect', () => {
    it('check updates model for select options', () => {
      const root = new DynamicForm(builder, { children: [] } as DynamicFormDefinition, {
        key: 'option1',
      });
      const definition = {
        key: 'key',
        template: {
          input: {
            type: 'select',
            options: [
              { value: 'option1', label: 'Option1' },
              { value: 'option2', label: 'Option2' },
              {
                label: 'Option Group',
                items: [
                  { value: 'option3', label: 'Option3' },
                  { value: 'option4', label: 'Option4' },
                ],
              },
            ],
          },
        },
      } as DynamicFormControlDefinition<string | string[], DynamicFormSelect<string>>;
      const formControl = new DynamicFormControl<string | string[], DynamicFormSelect<string>>(builder, root, root, definition);
      const formControlEvaluators = [
        { enabled: true, func: dynamicFormSelectEvaluatorFn },
      ] as DynamicFormControlEvaluator[];

      builder.createControlEvaluators.and.returnValue(formControlEvaluators);

      formControl.init();

      expect(formControl.model).toBe('option1');
      expect(formControl.control.value).toBe('option1');

      formControl.control.setValue('option3');
      formControl.check();

      expect(formControl.model).toBe('option3');
      expect(formControl.control.value).toBe('option3');

      formControl.template.input.options = [
        { value: 'option1', label: 'Option1' },
        { value: 'option2', label: 'Option2' },
      ];
      formControl.check();

      expect(formControl.model).toBeNull();
      expect(formControl.control.value).toBeNull();
    });
  });
});
