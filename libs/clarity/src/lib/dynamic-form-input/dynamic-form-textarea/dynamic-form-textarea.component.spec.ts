import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClrTextareaContainer } from '@clr/angular';
import { DynamicForm, DynamicFormConfigService, DynamicFormControl,
  DynamicFormControlDefinition, DynamicFormDefinition, DynamicFormTextarea,
  DynamicFormValidationService} from '@dynamic-forms/core';
import { ClrDynamicFormTextareaComponent } from './dynamic-form-textarea.component';
import { ClrDynamicFormTextareaModule } from './dynamic-form-textarea.module';

describe('ClrDynamicFormTextareaComponent', () => {
  let fixture: ComponentFixture<ClrDynamicFormTextareaComponent>;
  let component: ClrDynamicFormTextareaComponent;
  let form: DynamicForm;
  let definition: DynamicFormControlDefinition<DynamicFormTextarea>;
  let formControl: DynamicFormControl<DynamicFormTextarea>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClrDynamicFormTextareaModule
      ],
      providers: [
        {
          provide: DynamicFormConfigService,
          useValue: new DynamicFormConfigService({ name: 'test' })
        },
        DynamicFormValidationService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ClrDynamicFormTextareaComponent);
    component = fixture.componentInstance;

    form = new DynamicForm(<DynamicFormDefinition>{}, {});
    definition = <DynamicFormControlDefinition<DynamicFormTextarea>>{ key: 'key', template: { input: {} } };
    formControl = new DynamicFormControl<DynamicFormTextarea>(form, form, definition);

    component.field = formControl;

    fixture.detectChanges();
  }));

  it('creates component', () => {
    expect(component).toBeDefined();
    expect(component.id).toBe('key');
  });

  it('creates component template', () => {
    const textareaWrapperDebugElement = fixture.debugElement.query(By.directive(ClrTextareaContainer));
    const textareaDebugElement = textareaWrapperDebugElement.query(By.css('textarea'));
    const textareaElement = <HTMLTextAreaElement>textareaDebugElement.nativeElement;

    expect(textareaElement).toBeDefined();
    expect(textareaElement.id).toBe(component.id);
  });

  it('sets dynamic form control to readonly', () => {
    const textareaWrapperDebugElement = fixture.debugElement.query(By.directive(ClrTextareaContainer));
    const textareaDebugElement = textareaWrapperDebugElement.query(By.css('textarea'));
    const textareaElement = <HTMLTextAreaElement>textareaDebugElement.nativeElement;

    expect(textareaElement.readOnly).not.toBe(true);

    component.template.readonly = true;
    fixture.detectChanges();

    expect(textareaElement.readOnly).toBe(true);
  });
});
