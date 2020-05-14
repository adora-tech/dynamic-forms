import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DynamicForm, DynamicFormConfigService, DynamicFormControl, DynamicFormControlDefinition,
  DynamicFormDefinition, DynamicFormLibraryService, DynamicFormSwitch, DynamicFormValidationService } from '@dynamic-forms/core';
import { MatDynamicFormSwitchComponent } from './dynamic-form-switch.component';
import { MatDynamicFormSwitchModule } from './dynamic-form-switch.module';

describe('MatDynamicFormSwitchComponent', () => {
  let fixture: ComponentFixture<MatDynamicFormSwitchComponent>;
  let component: MatDynamicFormSwitchComponent;
  let form: DynamicForm;
  let definition: DynamicFormControlDefinition<DynamicFormSwitch>;
  let formControl: DynamicFormControl<DynamicFormSwitch>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDynamicFormSwitchModule
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

    fixture = TestBed.createComponent(MatDynamicFormSwitchComponent);
    component = fixture.componentInstance;

    form = new DynamicForm(<DynamicFormDefinition>{}, {});
    definition = <DynamicFormControlDefinition<DynamicFormSwitch>>{ key: 'key', template: { label: 'label' } };
    formControl = new DynamicFormControl<DynamicFormSwitch>(form, form, definition);

    component.field = formControl;

    fixture.detectChanges();
  }));

  it('creates component', () => {
    expect(component).toBeDefined();
    expect(component.id).toBeUndefined();
    expect(component.path).toBe('key');
    expect(component.inputId).toBe('key');
  });

  it('creates component template', () => {
    const checkDebugElement = fixture.debugElement.query(By.css('mat-slide-toggle'));
    const inputDebugElement = checkDebugElement.query(By.css('input.mat-slide-toggle-input'));
    const labelDebugElement = checkDebugElement.query(By.css('label.mat-slide-toggle-label'));
    const inputElement = <HTMLInputElement>inputDebugElement.nativeElement;
    const labelElement = <HTMLSpanElement>labelDebugElement.nativeElement;

    expect(inputElement).toBeDefined();
    expect(inputElement.id).toBe('key-input');
    expect(inputElement.type).toBe('checkbox');
    expect(labelElement.innerText).toBe('label');
  });
});
