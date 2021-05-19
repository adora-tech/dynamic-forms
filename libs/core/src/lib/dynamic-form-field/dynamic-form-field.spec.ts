import { DynamicFormElement } from '../dynamic-form-element/dynamic-form-element';
import { DynamicFormElementExpressionData } from '../dynamic-form-element/dynamic-form-element-expression-data';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { DynamicFormBuilder } from '../dynamic-form/dynamic-form.builder';
import { createDynamicFormBuilderSpy } from '../testing';
import { DynamicFormField } from './dynamic-form-field';
import { DynamicFormFieldClassType } from './dynamic-form-field-class-type';
import { DynamicFormFieldDefinition } from './dynamic-form-field-definition';
import { DynamicFormFieldExpression } from './dynamic-form-field-expression';
import { DynamicFormFieldExpressionData } from './dynamic-form-field-expression-data';
import { DynamicFormFieldExpressions } from './dynamic-form-field-expressions';

class DynamicFormTestField extends DynamicFormField {
  constructor(builder: DynamicFormBuilder, root: DynamicForm, parent: DynamicFormElement, definition: DynamicFormFieldDefinition) {
    super(builder, root, parent, definition);
    this._control = { setValidators: () => {} } as any;
  }

  get fieldClassType(): DynamicFormFieldClassType { return null; }

  check(): void {}
  destroy(): void {}

  reset(): void {}
  resetDefault(): void {}
  validate(): void {}

  initModel(model: any): void { this._model = model; }
  initControl(control: any): void { this._control = control; }

  checkExpressions(): void {}

  protected getChildren(): any[] { return undefined; }
  protected getValidators(): any[] { return undefined; }

  protected afterInitExpressions(): void {
    this.checkExpressions();
  }
}

describe('DynamicFormField', () => {
  let builder: jasmine.SpyObj<DynamicFormBuilder>;

  beforeEach(() => {
    builder = createDynamicFormBuilderSpy();
    builder.getFieldId.and.returnValue('fieldId');
  });

  it('creates instance', () => {
    const root = { classType: 'field', depth: 0 } as DynamicForm;
    const parentField = { classType: 'field', depth: 1 } as DynamicFormField;
    const parent = { parent: parentField as DynamicFormElement } as DynamicFormElement;
    const definition = { id: 'id', key: 'key', index: 1, type: 'componentType', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, root, parent, definition);

    expect(field.root).toBe(root);
    expect(field.parent).toBe(parent);
    expect(field.parentField).toBe(parentField);

    expect(field.definition).toBe(definition);
    expect(field.template).toBe(definition.template);

    expect(field.settings).toBeTruthy();

    expect(field.id).toBe('id');
    expect(field.key).toBe('key');
    expect(field.index).toBe(1);
    expect(field.depth).toBe(2);
    expect(field.classType).toBe('field');
    expect(field.componentType).toBe('componentType');

    expect(field.model).toBeUndefined();
    expect(field.value).toBeUndefined();
    expect(field.valid).toBeUndefined();
    expect(field.status).toBeUndefined();
    expect(field.control).toBeTruthy();

    expect(field.children).toEqual([]);
    expect(field.footerActions).toEqual([]);

    expect(field.expressions).toEqual({});
    expect(field.expressionData).toBeTruthy();
    expect(field.expressionChanges).toBeTruthy();
    expect(field.expressionChangesSubject).toBeTruthy();
  });

  it('creates instance with settings from default settings', () => {
    const definition = { key: 'key', template: {}, settings: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, null, definition);

    expect(field.settings).toEqual({ autoGeneratedId: false, updateType: 'change' });
  });

  it('creates instance with settings from definition', () => {
    const definition = { key: 'key', template: {}, settings: { autoGeneratedId: true, updateType: 'blur' } } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, null, definition);

    expect(field.settings).toEqual({ autoGeneratedId: true, updateType: 'blur' });
    expect(field.settings).not.toBe(definition.settings);
  });

  it('creates instance with settings from parent settings', () => {
    const parent = { classType: 'field', settings: { autoGeneratedId: true, updateType: 'blur' } } as DynamicFormField;
    const definition = { key: 'key', template: {}, settings: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, parent, definition);

    expect(field.settings).toEqual({ autoGeneratedId: true, updateType: 'blur' });
    expect(field.settings).not.toBe(parent.settings);
  });

  it('creates instance with settings from root settings', () => {
    const root = { settings: { autoGeneratedId: true, updateType: 'blur' } } as DynamicForm;
    const parent = { classType: 'field', settings: {} } as DynamicFormField;
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, root, parent, definition);

    expect(field.settings).toEqual({ autoGeneratedId: true, updateType: 'blur' });
    expect(field.settings).not.toBe(root.settings);
  });

  it('creates instance with settings from root and parent settings', () => {
    const root = { classType: 'field', settings: { autoGeneratedId: true } } as DynamicForm;
    const parent = { classType: 'field', settings: { updateType: 'blur' } } as DynamicFormField;
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, root, parent, definition);

    expect(field.settings).toEqual({ autoGeneratedId: true, updateType: 'blur' });
  });

  it('creates instance with path from key of definition', () => {
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, null, definition);

    expect(field.path).toBe('key');
  });

  it('creates instance with path from parent path and key of definition', () => {
    const parent = { classType: 'field', path: 'path' } as DynamicFormField;
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, parent, definition);

    expect(field.path).toBe('path.key');
  });

  it('hidden returns false', () => {
    const parent = { classType: 'field' } as DynamicFormField;
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, parent, definition);

    expect(field.hidden).toBe(false);
  });

  it('hidden returns true if parent is hidden', () => {
    const parent = { classType: 'field', hidden: true } as DynamicFormField;
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, parent, definition);

    expect(field.hidden).toBe(true);
  });

  it('hidden returns true if template is hidden', () => {
    const parent = { classType: 'field' } as DynamicFormField;
    const definition = { key: 'key', template: { hidden: true } } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, parent, definition);

    expect(field.hidden).toBe(true);
  });

  it('readonly returns false', () => {
    const parent = { classType: 'field' } as DynamicFormField;
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, parent, definition);

    expect(field.readonly).toBe(false);
  });

  it('readonly returns true if parent is readonly', () => {
    const parent = { classType: 'field', readonly: true } as DynamicFormField;
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, parent, definition);

    expect(field.readonly).toBe(true);
  });

  it('readonly returns true if template is readonly', () => {
    const parent = { classType: 'field' } as DynamicFormField;
    const definition = { key: 'key', template: { readonly: true } } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, parent, definition);

    expect(field.readonly).toBe(true);
  });

  it('creates instance with unregistered being true', () => {
    const parent = { path: 'path' } as DynamicFormField;
    const definition = { key: 'key', unregistered: true, template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, parent, definition);

    expect(field.unregistered).toBeTrue();
  });

  it('returns expression data with id, key, index, depth, model, value, valid and status', () => {
    const definition = { id: 'id', key: 'key', index: 1, template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, null, definition);

    field.initModel({ value: 'VALUE' });
    field.initControl({ status: 'VALID'});

    expect(field.expressionData.id).toBe('id');
    expect(field.expressionData.key).toBe('key');
    expect(field.expressionData.index).toBe(1);
    expect(field.expressionData.depth).toBe(0);
    expect(field.expressionData.model).toBe(field.model);
    expect(field.expressionData.value).toBe(field.value);
    expect(field.expressionData.valid).toBe(field.valid);
    expect(field.expressionData.status).toBe('VALID');
  });

  it('returns expression data with expression data of root, parent and parent field being undefined', () => {
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, null, definition);

    expect(field.expressionData.depth).toBe(0);
    expect(field.expressionData.root).toBeUndefined();
    expect(field.expressionData.parent).toBeUndefined();
    expect(field.expressionData.parentField).toBeUndefined();
  });

  it('returns expression data with expression data of root, parent and parent field being defined', () => {
    const rootExpressionData = {} as DynamicFormFieldExpressionData;
    const parentFieldExpressionData = {} as DynamicFormFieldExpressionData;
    const parentExpressionData = {} as DynamicFormElementExpressionData;
    const root = { classType: 'field', depth: 0, expressionData: rootExpressionData } as DynamicForm;
    const parentField = { classType: 'field', depth: 1, expressionData: parentFieldExpressionData } as DynamicFormField;
    const parent = { parent: parentField as DynamicFormElement, expressionData: parentExpressionData } as DynamicFormElement;
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, root, parent, definition);

    expect(field.expressionData.depth).toBe(2);
    expect(field.expressionData.root).toBe(rootExpressionData);
    expect(field.expressionData.parent).toBe(parentExpressionData);
    expect(field.expressionData.parentField).toBe(parentFieldExpressionData);
  });

  it('init calls calls initId, initExpressions, initChildren, initValidators, initHeaderActions and initFooterActions', () => {
    const root = {} as DynamicForm;
    const parent = {} as DynamicFormElement;
    const definition = { key: 'key', template: {}, headerActions: [], footerActions: [] } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, root, parent, definition);

    const initIdSpy = spyOn(field as any, 'initId').and.callThrough();
    const getIdSpy = spyOn(field as any, 'getId').and.callThrough();
    const initExpressionsSpy = spyOn(field as any, 'initExpressions').and.callThrough();
    const getExpressionsSpy = spyOn(field as any, 'getExpressions').and.callThrough();
    const initChildrenSpy = spyOn(field as any, 'initChildren').and.callThrough();
    const getChildrenSpy = spyOn(field as any, 'getChildren').and.callThrough();
    const initValidatorsSpy = spyOn(field as any, 'initValidators').and.callThrough();
    const getValidatorsSpy = spyOn(field as any, 'getValidators').and.callThrough();
    const initHeaderActionsSpy = spyOn(field as any, 'initHeaderActions').and.callThrough();
    const getHeaderActionsSpy = spyOn(field as any, 'getHeaderActions').and.callThrough();
    const initFooterActionsSpy = spyOn(field as any, 'initFooterActions').and.callThrough();
    const getFooterActionsSpy = spyOn(field as any, 'getFooterActions').and.callThrough();

    field.init();

    expect(initIdSpy).toHaveBeenCalledTimes(1);
    expect(getIdSpy).toHaveBeenCalledTimes(1);
    expect(builder.getFieldId).toHaveBeenCalledOnceWith(field);
    expect(initExpressionsSpy).toHaveBeenCalledTimes(1);
    expect(getExpressionsSpy).toHaveBeenCalledTimes(1);
    expect(builder.createFieldExpressions).toHaveBeenCalledOnceWith(field);
    expect(initChildrenSpy).toHaveBeenCalledTimes(1);
    expect(getChildrenSpy).toHaveBeenCalledTimes(1);
    expect(initValidatorsSpy).toHaveBeenCalledTimes(1);
    expect(getValidatorsSpy).toHaveBeenCalledTimes(1);
    expect(initHeaderActionsSpy).toHaveBeenCalledTimes(1);
    expect(getHeaderActionsSpy).toHaveBeenCalledTimes(1);
    expect(builder.createFormActions).toHaveBeenCalledWith(root, field, definition.headerActions);
    expect(initFooterActionsSpy).toHaveBeenCalledTimes(1);
    expect(getFooterActionsSpy).toHaveBeenCalledTimes(1);
    expect(builder.createFormActions).toHaveBeenCalledWith(root, field, definition.footerActions);
  });

  it('inits id', () => {
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, null, definition);

    builder.getFieldId.and.returnValue('fieldId');

    field.init();

    expect(field.id).toBe('fieldId');
  });

  it('inits expressions', () => {
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, null, definition);
    const fieldExpressions = {
      'required': { value: true } as DynamicFormFieldExpression,
      'readonly': { value: false } as DynamicFormFieldExpression
    } as DynamicFormFieldExpressions;

    spyOn(field, 'checkExpressions');

    builder.createFieldExpressions.and.returnValue(fieldExpressions);

    field.init();

    expect(field.expressions).toBe(fieldExpressions);
    expect(field.template.required).toBe(true);
    expect(field.template.readonly).toBe(false);
    expect(field.checkExpressions).toHaveBeenCalled();
  });

  it('errors returns errors from control', () => {
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, null, definition);

    const errors = {};
    field.initControl({ errors });

    expect(field.errors).toBe(errors);
  });

  it('hasErrors returns true if errors exist', () => {
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, null, definition);

    field.initControl({ errors: {} });

    expect(field.hasErrors).toBe(true);
  });

  it('hasErrors returns false if no errors exist', () => {
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, null, definition);

    field.initControl({ errors: null });

    expect(field.hasErrors).toBe(false);
  });

  it('showErrors returns false if no errors exist', () => {
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, null, definition);

    field.initControl({ errors: null, touched: true });

    expect(field.showErrors).toBe(false);
  });

  it('showErrors returns false if errors exist but control is untouched', () => {
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, null, definition);

    field.initControl({ errors: {}, touched: false });

    expect(field.showErrors).toBe(false);
  });

  it('showErrors returns true if errors exist and control is touched', () => {
    const definition = { key: 'key', template: {} } as DynamicFormFieldDefinition;
    const field = new DynamicFormTestField(builder, null, null, definition);

    field.initControl({ errors: {}, touched: true });

    expect(field.showErrors).toBe(true);
  });
});
