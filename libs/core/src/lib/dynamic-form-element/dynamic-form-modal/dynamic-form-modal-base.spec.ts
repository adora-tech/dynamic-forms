import { DynamicForm } from '../../dynamic-form/dynamic-form';
import { DynamicFormModal} from './dynamic-form-modal';
import { DynamicFormModalBase } from './dynamic-form-modal-base';
import { DynamicFormModalDefinition } from './dynamic-form-modal-definition';

class DynamicFormModalTestComponent extends DynamicFormModalBase {}

describe('DynamicFormModalBase', () => {
  let component: DynamicFormModalTestComponent;

  beforeEach(() => {
    component = new DynamicFormModalTestComponent();
  });

  it('component returns definition', () => {
    const root = {} as DynamicForm;
    const definition = { type: 'element', template: {} } as DynamicFormModalDefinition;
    const element = new DynamicFormModal(root, definition);

    component.element = element;

    expect(component.element).toEqual(element);
    expect(component.definition).toEqual(element.definition);
    expect(component.template).toEqual(element.template);
    expect(component.children).toEqual([]);
    expect(component.trigger).toBeUndefined();
    expect(component.headerActions).toEqual([]);
    expect(component.footerActions).toEqual([]);
    expect(component.isOpen).toBeFalse();
    expect(component.isOpen$).toBeTruthy();
  });

  it('component calls open of modal', () => {
    const root = {} as DynamicForm;
    const definition = { type: 'element', template: {} } as DynamicFormModalDefinition;
    const element = new DynamicFormModal(root, definition);

    spyOn(element, 'open').and.callThrough();

    component.element = element;

    component.open();

    expect(element.open).toHaveBeenCalled();
  });

  it('component calls close of modal', () => {
    const root = {} as DynamicForm;
    const definition = { type: 'element', template: {} } as DynamicFormModalDefinition;
    const element = new DynamicFormModal(root, definition);

    spyOn(element, 'close').and.callThrough();

    component.element = element;

    component.close();

    expect(element.close).toHaveBeenCalled();
  });

  it('component calls toggle of modal', () => {
    const root = {} as DynamicForm;
    const definition = { type: 'element', template: {} } as DynamicFormModalDefinition;
    const element = new DynamicFormModal(root, definition);

    spyOn(element, 'toggle').and.callThrough();

    component.element = element;

    component.toggle();

    expect(element.toggle).toHaveBeenCalled();
  });
});
