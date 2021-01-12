import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DynamicForm, DynamicFormConfigService, DynamicFormControl, DynamicFormControlDefinition,
  DynamicFormDefinition, DynamicFormLibraryService, DynamicFormToggle, DynamicFormValidationService} from '@dynamic-forms/core';
import { BsDynamicFormToggleComponent } from './dynamic-form-toggle.component';
import { BsDynamicFormToggleModule } from './dynamic-form-toggle.module';

describe('BsDynamicFormToggleComponent', () => {
  let fixture: ComponentFixture<BsDynamicFormToggleComponent>;
  let component: BsDynamicFormToggleComponent;
  let form: DynamicForm;
  let definition: DynamicFormControlDefinition<DynamicFormToggle>;
  let formControl: DynamicFormControl<DynamicFormToggle>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BsDynamicFormToggleModule
      ],
      providers: [
        {
          provide: DynamicFormLibraryService,
          useValue: new DynamicFormLibraryService({ name: 'test' })
        },
        DynamicFormConfigService,
        DynamicFormValidationService
      ]
    });

    fixture = TestBed.createComponent(BsDynamicFormToggleComponent);
    component = fixture.componentInstance;

    form = new DynamicForm(<DynamicFormDefinition>{}, {});
    definition = <DynamicFormControlDefinition<DynamicFormToggle>>{
      key: 'key',
      template: {
        input: {
          options: [
            { value: 'value1', label: 'label1' },
            { value: 'value2', label: 'label2' },
            { value: 'value3', label: 'label3', disabled: true}
          ]
        }
      }
    };
    formControl = new DynamicFormControl<DynamicFormToggle>(form, form, definition);

    component.field = formControl;

    fixture.detectChanges();
  });

  it('creates component', () => {
    expect(component).toBeTruthy();
    expect(component.id).toBeUndefined();
    expect(component.path).toBe('key');
    expect(component.inputId).toBe('key');
  });

  it('renders component template', () => {
    const wrapperDebugElement = fixture.debugElement.query(By.css('div.btn-group.btn-group-toggle'));
    const labelDebugElements = wrapperDebugElement.queryAll(By.css('label.btn.btn-light'));
    const inputDebugElements = labelDebugElements.map(elem => elem.query(By.css('input')));
    const labelElements = <HTMLLabelElement[]>labelDebugElements.map(elem => elem.nativeElement);
    const inputElements = <HTMLInputElement[]>inputDebugElements.map(elem => elem.nativeElement);

    expect(inputElements.length).toBe(3);
    expect(labelElements.length).toBe(3);
    expect(inputElements[0].id).toBe(`key-0`);
    expect(inputElements[0].type).toBe('radio');
    expect(labelElements[0].innerText).toBe('label1');
    expect(inputElements[1].id).toBe('key-1');
    expect(inputElements[1].type).toBe('radio');
    expect(labelElements[1].innerText).toBe('label2');
    expect(inputElements[2].id).toBe('key-2');
    expect(inputElements[2].type).toBe('radio');
    expect(labelElements[2].innerText).toBe('label3');
  });

  it('sets dynamic form control to readonly', () => {
    const wrapperDebugElement = fixture.debugElement.query(By.css('div.btn-group.btn-group-toggle'));
    const inputDebugElements = wrapperDebugElement.queryAll(By.css('input'));
    const inputElements = <HTMLInputElement[]>inputDebugElements.map(elem => elem.nativeElement);

    expect(inputElements[0].readOnly).not.toBe(true);
    expect(inputElements[1].readOnly).not.toBe(true);
    expect(inputElements[2].readOnly).not.toBe(true);

    component.template.readonly = true;
    fixture.detectChanges();

    expect(inputElements[0].readOnly).toBe(true);
    expect(inputElements[1].readOnly).toBe(true);
    expect(inputElements[2].readOnly).toBe(true);
  });
});
