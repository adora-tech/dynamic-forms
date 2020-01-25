import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClrInputContainer } from '@clr/angular';
import { DynamicForm, DynamicFormConfigService, DynamicFormControl,
  DynamicFormControlDefinition, DynamicFormDefinition, DynamicFormNumberbox,
  DynamicFormValidationService} from '@dynamic-forms/core';
import { ClrDynamicFormNumberboxComponent } from './dynamic-form-numberbox.component';
import { ClrDynamicFormNumberboxModule } from './dynamic-form-numberbox.module';

describe('ClrDynamicFormNumberboxComponent', () => {
  let fixture: ComponentFixture<ClrDynamicFormNumberboxComponent>;
  let component: ClrDynamicFormNumberboxComponent;
  let form: DynamicForm;
  let definition: DynamicFormControlDefinition<DynamicFormNumberbox>;
  let formControl: DynamicFormControl<DynamicFormNumberbox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClrDynamicFormNumberboxModule
      ],
      providers: [
        {
          provide: DynamicFormConfigService,
          useValue: new DynamicFormConfigService({ name: 'test' })
        },
        DynamicFormValidationService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ClrDynamicFormNumberboxComponent);
    component = fixture.componentInstance;

    form = new DynamicForm(<DynamicFormDefinition>{}, {});
    definition = <DynamicFormControlDefinition<DynamicFormNumberbox>>{ key: 'key', template: { input: {} } };
    formControl = new DynamicFormControl<DynamicFormNumberbox>(form, form, definition);

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
    const inputElement = <HTMLInputElement>inputDebugElement.nativeElement;

    expect(inputElement).toBeDefined();
    expect(inputElement.id).toBe(component.id);
    expect(inputElement.type).toBe('number');
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
