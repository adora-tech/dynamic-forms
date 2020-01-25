import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DynamicForm, DynamicFormCheckbox, DynamicFormConfigService,
  DynamicFormControl, DynamicFormControlDefinition, DynamicFormDefinition,
  DynamicFormValidationService } from '@dynamic-forms/core';
import { NbDynamicFormCheckboxComponent } from './dynamic-form-checkbox.component';
import { NbDynamicFormCheckboxModule } from './dynamic-form-checkbox.module';

describe('NbDynamicFormCheckboxComponent', () => {
  let fixture: ComponentFixture<NbDynamicFormCheckboxComponent>;
  let component: NbDynamicFormCheckboxComponent;
  let form: DynamicForm;
  let definition: DynamicFormControlDefinition<DynamicFormCheckbox>;
  let formControl: DynamicFormControl<DynamicFormCheckbox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NbDynamicFormCheckboxModule
      ],
      providers: [
        {
          provide: DynamicFormConfigService,
          useValue: new DynamicFormConfigService({ name: 'test' })
        },
        DynamicFormValidationService
      ]
    });

    fixture = TestBed.createComponent(NbDynamicFormCheckboxComponent);
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
    const checkDebugElement = fixture.debugElement.query(By.css('mat-checkbox'));
    const inputDebugElement = checkDebugElement.query(By.css('input.mat-checkbox-input'));
    const labelDebugElement = checkDebugElement.query(By.css('span.mat-checkbox-label'));
    const inputElement = <HTMLInputElement>inputDebugElement.nativeElement;
    const labelElement = <HTMLSpanElement>labelDebugElement.nativeElement;

    expect(inputElement).toBeDefined();
    expect(inputElement.id).toBe('key-input');
    expect(inputElement.type).toBe('checkbox');
    expect(labelElement.innerText).toBe('label');
  });
});
