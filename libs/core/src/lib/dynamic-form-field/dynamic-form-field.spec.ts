import { DynamicFormFieldExpression } from '../dynamic-form-expression/dynamic-form-field-expression';
import { DynamicFormFieldExpressionData } from '../dynamic-form-expression/dynamic-form-field-expression-data';
import { DynamicFormFieldExpressions } from '../dynamic-form-expression/dynamic-form-field-expressions';
import { DynamicFormField } from './dynamic-form-field';
import { DynamicFormFieldDefinition } from './dynamic-form-field-definition';

class DynamicFormFieldTest extends DynamicFormField {
  check() {}
  destroy() {}

  reset() {}
  resetDefault() {}
  validate() {}

  initModel(model: any) { this._model = model; }
}

describe('DynamicFormField', () => {
  it('new instance', () => {
    const root = null;
    const parent = null;
    const definition = <DynamicFormFieldDefinition>{ id: 'id', key: 'key', index: 1, type: 'componentType', template: {} };
    const field = new DynamicFormFieldTest(root, parent, definition);

    expect(field.root).toBe(root);
    expect(field.parent).toBe(parent);
    expect(field.definition).toBe(definition);
    expect(field.template).toBe(definition.template);

    expect(field.id).toBe('id');
    expect(field.key).toBe('key');
    expect(field.index).toBe(1);
    expect(field.path).toBe('key');
    expect(field.classType).toBe('field');
    expect(field.componentType).toBe('componentType');

    expect(field.model).toBeUndefined();
    expect(field.options).toBeDefined();
    expect(field.control).toBeUndefined();

    expect(field.elements).toEqual([]);
    expect(field.actions).toEqual([]);

    expect(field.expressions).toEqual({});
    expect(field.expressionData).toBeTruthy();
    expect(field.expressionChanges).toBeTruthy();
    expect(field.expressionChangesSubject).toBeTruthy();
  });

  it('new instance with path from key of definition', () => {
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: {} };
    const field = new DynamicFormFieldTest(null, null, definition);

    expect(field.path).toBe('key');
  });

  it('new instance with path from parent path and key of definition', () => {
    const parent = <DynamicFormField>{ path: 'path' };
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: {} };
    const field = new DynamicFormFieldTest(null, parent, definition);

    expect(field.path).toBe('path.key');
  });

  it('new instance with options from default options', () => {
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: {}, options: {} };
    const field = new DynamicFormFieldTest(null, null, definition);

    expect(field.options).toEqual({ update: 'change' });
  });

  it('new instance with options from definition', () => {
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: {}, options: { update: 'blur' } };
    const field = new DynamicFormFieldTest(null, null, definition);

    expect(field.options).toEqual({ update: 'blur' });
    expect(field.options).not.toBe(definition.options);
  });

  it('new instance with options from parent options', () => {
    const parent = <DynamicFormField>{ options: { update: 'blur' } };
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: {}, options: {} };
    const field = new DynamicFormFieldTest(null, parent, definition);

    expect(field.options).toEqual({ update: 'blur' });
    expect(field.options).not.toBe(parent.options);
  });

  it('new instance with options from root options', () => {
    const root = <DynamicFormField>{ options: { update: 'blur' } };
    const parent = <DynamicFormField>{ options: {} };
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: {} };
    const field = new DynamicFormFieldTest(root, parent, definition);

    expect(field.options).toEqual({ update: 'blur' });
    expect(field.options).not.toBe(root.options);
  });

  it('hidden returns false', () => {
    const parent = <DynamicFormField>{};
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: {} };
    const field = new DynamicFormFieldTest(null, parent, definition);

    expect(field.hidden).toBe(false);
  });

  it('hidden returns true if parent is hidden', () => {
    const parent = <DynamicFormField>{ hidden: true  };
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: {} };
    const field = new DynamicFormFieldTest(null, parent, definition);

    expect(field.hidden).toBe(true);
  });

  it('hidden returns true if template is hidden', () => {
    const parent = <DynamicFormField>{};
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: { hidden: true } };
    const field = new DynamicFormFieldTest(null, parent, definition);

    expect(field.hidden).toBe(true);
  });

  it('readonly returns false', () => {
    const parent = <DynamicFormField>{ };
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: {} };
    const field = new DynamicFormFieldTest(null, parent, definition);

    expect(field.readonly).toBe(false);
  });

  it('readonly returns true if parent is readonly', () => {
    const parent = <DynamicFormField>{readonly: true };
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: {} };
    const field = new DynamicFormFieldTest(null, parent, definition);

    expect(field.readonly).toBe(true);
  });

  it('readonly returns true if template is readonly', () => {
    const parent = <DynamicFormField>{};
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: { readonly: true } };
    const field = new DynamicFormFieldTest(null, parent, definition);

    expect(field.readonly).toBe(true);
  });

  it('returns expression data with id, key, index and model', () => {
    const definition = <DynamicFormFieldDefinition>{ id: 'id', key: 'key', index: 1, template: {} };
    const field = new DynamicFormFieldTest(null, null, definition);

    field.initModel({});

    expect(field.expressionData.id).toBe('id');
    expect(field.expressionData.key).toBe('key');
    expect(field.expressionData.index).toBe(1);
    expect(field.expressionData.model).toEqual({});
  });

  it('returns expression data with expression data of parent and root being undefined', () => {
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: {} };
    const field = new DynamicFormFieldTest(null, null, definition);

    expect(field.expressionData.parent).toBeUndefined();
    expect(field.expressionData.root).toBeUndefined();
  });

  it('returns expression data with expression data of parent and root being defined', () => {
    const rootExpressionData = <DynamicFormFieldExpressionData>{};
    const parentExpressionData = <DynamicFormFieldExpressionData>{};
    const root = <DynamicFormField>{ expressionData: rootExpressionData };
    const parent = <DynamicFormField>{ expressionData: parentExpressionData };
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: {} };
    const field = new DynamicFormFieldTest(root, parent, definition);

    expect(field.expressionData.parent).toEqual(parentExpressionData);
    expect(field.expressionData.root).toEqual(rootExpressionData);
  });

  it('inits expressions', () => {
    const definition = <DynamicFormFieldDefinition>{ key: 'key', template: {} };
    const field = new DynamicFormFieldTest(null, null, definition);
    const fieldExpressions = <DynamicFormFieldExpressions>{
      'required': <DynamicFormFieldExpression>{ value: true },
      'input.readonly': <DynamicFormFieldExpression>{ value: false }
    };

    field.initExpressions(fieldExpressions);

    expect(field.expressions).toBe(fieldExpressions);
    expect(field.template['required']).toBe(true);
    expect(field.template['input']['readonly']).toBe(false);
  });
});
