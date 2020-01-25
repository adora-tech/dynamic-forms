import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClrInputContainer } from '@clr/angular';
import { DynamicForm, DynamicFormCombobox, DynamicFormConfigService,
  DynamicFormControl, DynamicFormControlDefinition, DynamicFormDefinition,
  DynamicFormValidationService} from '@dynamic-forms/core';
import { ClrDynamicFormComboboxComponent } from './dynamic-form-combobox.component';
import { ClrDynamicFormComboboxModule } from './dynamic-form-combobox.module';

describe('ClrDynamicFormComboboxComponent', () => {
  let fixture: ComponentFixture<ClrDynamicFormComboboxComponent>;
  let component: ClrDynamicFormComboboxComponent;
  let form: DynamicForm;
  let definition: DynamicFormControlDefinition<DynamicFormCombobox>;
  let formControl: DynamicFormControl<DynamicFormCombobox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClrDynamicFormComboboxModule
      ],
      providers: [
        {
          provide: DynamicFormConfigService,
          useValue: new DynamicFormConfigService({ name: 'test' })
        },
        DynamicFormValidationService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ClrDynamicFormComboboxComponent);
    component = fixture.componentInstance;

    form = new DynamicForm(<DynamicFormDefinition>{}, {});
    definition = <DynamicFormControlDefinition<DynamicFormCombobox>>{
      key: 'key',
      template: {
        input: {
          options: [
            'Value1',
            'Value2',
            'Value3'
          ]
        }
      }
    };
    formControl = new DynamicFormControl<DynamicFormCombobox>(form, form, definition);

    component.field = formControl;

    fixture.detectChanges();
  }));

  it('creates component', () => {
    expect(component).toBeDefined();
    expect(component.id).toBe('key');
  });

  it('creates component template', () => {
    const inputWrapperDebugElement = fixture.debugElement.query(By.directive(ClrInputContainer));
    const inputDebugElement = inputWrapperDebugElement.query(By.css('input'));
    const inputListDebugElement = fixture.debugElement.query(By.css('datalist'));
    const inputListItemDebugElements = inputListDebugElement.queryAll(By.css('option'));

    const inputElement = <HTMLInputElement>inputDebugElement.nativeElement;
    const inputListElement = <HTMLDataListElement>inputListDebugElement.nativeElement;
    const inputListItemElements = <HTMLOptionElement[]>inputListItemDebugElements.map(elem => elem.nativeElement);

    expect(inputElement).toBeDefined();
    expect(inputElement.id).toBe(component.id);
    expect(inputElement.type).toBe('text');
    expect(inputElement.list).toBe(inputListElement);
    expect(inputListElement.id).toBe('list');
    expect(inputListItemElements.length).toBe(3);
    expect(inputListItemElements[0].value).toBe('Value1');
    expect(inputListItemElements[0].innerText).toBe('Value1');
    expect(inputListItemElements[1].value).toBe('Value2');
    expect(inputListItemElements[1].innerText).toBe('Value2');
    expect(inputListItemElements[2].value).toBe('Value3');
    expect(inputListItemElements[2].innerText).toBe('Value3');
  });

  it('sets dynamic form control to readonly', () => {
    const inputWrapperDebugElement = fixture.debugElement.query(By.directive(ClrInputContainer));
    const inputDebugElement = inputWrapperDebugElement.query(By.css('input'));
    const inputElement = <HTMLInputElement>inputDebugElement.nativeElement;

    expect(inputElement.readOnly).not.toBe(true);

    component.template.readonly = true;
    fixture.detectChanges();

    expect(inputElement.readOnly).toBe(true);
  });
});
