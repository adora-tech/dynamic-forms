import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClrCheckboxWrapper } from '@clr/angular';
import { DynamicForm, DynamicFormCheckbox, DynamicFormControl, DynamicFormControlDefinition,
  DynamicFormDefinition } from '@dynamic-forms/core';
import { DynamicFormCheckboxComponent } from './dynamic-form-checkbox.component';
import { DynamicFormCheckboxModule } from './dynamic-form-checkbox.module';

describe('DynamicFormCheckboxComponent', () => {
  let fixture: ComponentFixture<DynamicFormCheckboxComponent>;
  let component: DynamicFormCheckboxComponent;
  let form: DynamicForm;
  let definition: DynamicFormControlDefinition<DynamicFormCheckbox>;
  let formControl: DynamicFormControl<DynamicFormCheckbox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DynamicFormCheckboxModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormCheckboxComponent);
    component = fixture.componentInstance;

    form = new DynamicForm(<DynamicFormDefinition>{}, {});
    definition = <DynamicFormControlDefinition<DynamicFormCheckbox>>{ key: 'key', template: { label: 'label' } };
    formControl = new DynamicFormControl<DynamicFormCheckbox>(form, form, definition);

    component.field = formControl;

    fixture.detectChanges();
  }));

  it('creates component', () => {
    expect(component).toBeDefined();
    expect(component.id).toBe('key');
  });

  it('creates component template', () => {
    const inputWrapperDebugElement = fixture.debugElement.query(By.directive(ClrCheckboxWrapper));
    const inputDebugElement = inputWrapperDebugElement.query(By.css('input'));
    const labelDebugElement = inputWrapperDebugElement.query(By.css('label.clr-control-label'));
    const inputWrapperElement = <HTMLDivElement>inputWrapperDebugElement.nativeElement;
    const inputElement = <HTMLInputElement>inputDebugElement.nativeElement;
    const labelElement = <HTMLLabelElement>labelDebugElement.nativeElement;

    expect(inputWrapperElement).toBeDefined();
    expect(inputElement).toBeDefined();
    expect(inputElement.id).toBe(component.id);
    expect(inputElement.type).toBe('checkbox');
    expect(labelElement).toBeDefined();
    expect(labelElement.htmlFor).toBe(component.id);
    expect(labelElement.innerText).toBe('label');
  });

  it('sets dynamic form control to readonly', () => {
    const inputWrapperDebugElement = fixture.debugElement.query(By.directive(ClrCheckboxWrapper));
    const inputDebugElement = inputWrapperDebugElement.query(By.css('input'));
    const inputWrapperElement = <HTMLElement>inputWrapperDebugElement.nativeElement;
    const inputElement = <HTMLInputElement>inputDebugElement.nativeElement;

    expect(inputWrapperElement.className).not.toContain('readonly');
    expect(inputElement.readOnly).not.toBe(true);

    component.template.readonly = true;
    fixture.detectChanges();

    expect(inputWrapperElement.className).toContain('readonly');
    expect(inputElement.readOnly).toBe(true);
  });
});
