import { DynamicFormLibraryService } from '../dynamic-form-library/dynamic-form-library.service';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { DynamicFormDefinition } from '../dynamic-form/dynamic-form-definition';
import { DynamicFormBuilder } from '../dynamic-form/dynamic-form.builder';
import { DynamicFormAction } from './dynamic-form-action';
import { DynamicFormActionBase } from './dynamic-form-action-base';
import { DynamicFormActionDefinition } from './dynamic-form-action-definition';
import { DynamicFormActionService } from './dynamic-form-action.service';

class DynamicFormActionTestComponent extends DynamicFormActionBase {
  constructor(protected actionService: DynamicFormActionService) {
    super(actionService);
  }
}

describe('DynamicFormActionBase', () => {
  let builder: DynamicFormBuilder;
  let actionService: DynamicFormActionService;
  let component: DynamicFormActionTestComponent;

  beforeEach(() => {
    const libraryService = new DynamicFormLibraryService({ name: 'test' });

    builder = {} as any;
    actionService = new DynamicFormActionService(libraryService, []);
    component = new DynamicFormActionTestComponent(actionService);
  });

  it('creates instance', () => {
    const definition = { id: 'id', type: 'element', template: {} } as DynamicFormActionDefinition;
    const action = new DynamicFormAction(builder, {} as any, {} as any, definition);

    component.action = action;

    expect(component.id).toBe(action.id);
    expect(component.action).toBe(action);
    expect(component.element).toBe(action);
    expect(component.definition).toBe(action.definition);
    expect(component.template).toBe(action.template);

    expect(component.dialogOpen).toBeFalse();
    expect(component.dialogOpen$).toBeTruthy();

    expect(component.dialogDefinition).toBeUndefined();
    expect(() => component.dialogTemplate).toThrow();

    expect(component.dialog).toBeUndefined();
    expect(() => component.dialogChildren).toThrow();
    expect(() => component.dialogHeaderActions).toThrow();
    expect(() => component.dialogFooterActions).toThrow();
  });

  it('creates instance with dialog', () => {
    const dialogDefinition = { template: {} } as DynamicFormDefinition;
    const definition = { id: 'id', type: 'element', template: {}, dialogDefinition } as DynamicFormActionDefinition;
    const action = new DynamicFormAction(builder, {} as any, {} as any, definition);
    const dialog = new DynamicForm(builder, dialogDefinition, {});

    action.initDialog(dialog);

    component.action = action;

    expect(component.id).toBe(action.id);
    expect(component.action).toBe(action);
    expect(component.element).toBe(action);
    expect(component.definition).toBe(action.definition);
    expect(component.template).toBe(action.template);

    expect(component.dialogOpen).toBeFalse();
    expect(component.dialogOpen$).toBeTruthy();

    expect(component.dialogDefinition).toBe(dialogDefinition);
    expect(component.dialogTemplate).toBe(dialogDefinition.template);

    expect(component.dialog).toBe(dialog);
    expect(component.dialogChildren).toBe(dialog.children);
    expect(component.dialogHeaderActions).toBe(dialog.headerActions);
    expect(component.dialogFooterActions).toBe(dialog.footerActions);
  });

  it('open, close, and toggle dialog throws if no dialog', () => {
    const definition = { id: 'id', type: 'element', template: {} } as DynamicFormActionDefinition;
    const action = new DynamicFormAction(builder, {} as any, {} as any, definition);

    component.action = action;

    expect(() => component.openDialog()).not.toThrow();
    expect(() => component.closeDialog()).not.toThrow();
    expect(() => component.toggleDialog()).not.toThrow();
  });

  it('opens, closes and toggles dialog', () => {
    const dialogDefinition = { template: {} } as DynamicFormDefinition;
    const definition = { template: {}, dialogDefinition } as DynamicFormActionDefinition;
    const action = new DynamicFormAction(builder, null, null, definition);
    const dialog = new DynamicForm(builder, dialogDefinition, {});

    action.initDialog(dialog);
    component.action = action;

    spyOn(action, 'openDialog');
    spyOn(action, 'closeDialog');
    spyOn(action, 'toggleDialog');

    component.openDialog();
    component.closeDialog();
    component.toggleDialog();

    expect(action.openDialog).toHaveBeenCalled();
    expect(action.closeDialog).toHaveBeenCalled();
    expect(action.toggleDialog).toHaveBeenCalled();
  });

  it('checks dialog', () => {
    const dialogDefinition = { template: {} } as DynamicFormDefinition;
    const definition = { id: 'id', type: 'element', template: {}, dialogDefinition } as DynamicFormActionDefinition;
    const action = new DynamicFormAction(builder, {} as any, {} as any, definition);
    const dialog = new DynamicForm(builder, dialogDefinition, {});

    action.initDialog(dialog);
    action.openDialog();

    spyOn(dialog, 'check');

    component.action = action;
    component.ngDoCheck();

    expect(dialog.check).toHaveBeenCalled();
  });

  it('does not check dialog if not open', () => {
    const dialogDefinition = { template: {} } as DynamicFormDefinition;
    const definition = { id: 'id', type: 'element', template: {}, dialogDefinition } as DynamicFormActionDefinition;
    const action = new DynamicFormAction(builder, {} as any, {} as any, definition);
    const dialog = new DynamicForm(builder, dialogDefinition, {});

    action.initDialog(dialog);

    spyOn(dialog, 'check');

    component.action = action;
    component.ngDoCheck();

    expect(dialog.check).not.toHaveBeenCalled();
  });

  it('handles event by calling handle of action service', () => {
    const definition = { id: 'id', type: 'element', template: {} } as DynamicFormActionDefinition;
    const action = new DynamicFormAction(builder, {} as any, {} as any, definition);
    const event = {} as Event;

    spyOn(actionService, 'handle');

    component.action = action;
    component.handleEvent(event);

    expect(actionService.handle).toHaveBeenCalledWith(action, event);
  });

  it('handles event by calling handle of action service if dialog and dialog is open', () => {
    const dialogDefinition = { template: {} } as DynamicFormDefinition;
    const definition = { id: 'id', type: 'element', template: {}, dialogDefinition } as DynamicFormActionDefinition;
    const action = new DynamicFormAction(builder, {} as any, {} as any, definition);
    const dialog = new DynamicForm(builder, dialogDefinition, {});
    const event = {} as Event;

    action.initDialog(dialog);
    component.action = action;
    component.openDialog();

    spyOn(action, 'openDialog');
    spyOn(actionService, 'handle');

    component.handleEvent(event);

    expect(action.openDialog).not.toHaveBeenCalled();
    expect(actionService.handle).toHaveBeenCalledWith(action, event);
  });

  it('handles event by calling openDialog of action if dialog but dialog not open', () => {
    const dialogDefinition = { template: {} } as DynamicFormDefinition;
    const definition = { id: 'id', type: 'element', template: {}, dialogDefinition } as DynamicFormActionDefinition;
    const action = new DynamicFormAction(builder, {} as any, {} as any, definition);
    const dialog = new DynamicForm(builder, dialogDefinition, {});
    const event = {} as Event;

    action.initDialog(dialog);
    component.action = action;

    spyOn(action, 'openDialog');
    spyOn(actionService, 'handle');

    component.handleEvent(event);

    expect(action.openDialog).toHaveBeenCalled();
    expect(actionService.handle).not.toHaveBeenCalled();
  });
});
