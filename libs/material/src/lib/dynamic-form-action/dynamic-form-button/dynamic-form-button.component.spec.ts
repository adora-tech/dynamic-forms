import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DynamicForm, DynamicFormAction, DynamicFormActionService, DynamicFormBuilder,
  DynamicFormButtonDefinition, DynamicFormButtonTemplate, DynamicFormField,
  DynamicFormLibraryService } from '@dynamic-forms/core';
import { MatDynamicFormButtonComponent } from './dynamic-form-button.component';
import { MatDynamicFormButtonModule } from './dynamic-form-button.module';

describe('MatDynamicFormButtonComponent', () => {
  let fixture: ComponentFixture<MatDynamicFormButtonComponent>;
  let component: MatDynamicFormButtonComponent;
  let element: DynamicFormAction<DynamicFormButtonTemplate, DynamicFormButtonDefinition>;
  let builder: DynamicFormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDynamicFormButtonModule,
      ],
      providers: [
        {
          provide: DynamicFormLibraryService,
          useValue: new DynamicFormLibraryService({ name: 'test' }),
        },
        DynamicFormActionService,
      ],
    });

    fixture = TestBed.createComponent(MatDynamicFormButtonComponent);
    component = fixture.componentInstance;

    builder = {} as any;

    const root = {} as DynamicForm;
    const parent = {} as DynamicFormField;
    const template = { label: 'label' } as DynamicFormButtonTemplate;
    const definition = { id: 'id', type: 'element', template } as DynamicFormButtonDefinition;
    element = new DynamicFormAction<DynamicFormButtonTemplate, DynamicFormButtonDefinition>(builder, root, parent, definition);
    component.element = element;

    fixture.detectChanges();
  });

  it('creates component', () => {
    expect(component.element).toBe(element);
    expect(component.template.label).toBe('label');
  });

  it('renders component template', () => {
    const formButtonDebugElement = fixture.debugElement.query(By.css('button.dynamic-form-button'));
    const formButtonElement = formButtonDebugElement.nativeElement as HTMLButtonElement;

    expect(formButtonElement).toBeTruthy();
    expect(formButtonElement.id).toBe('id');
    expect(formButtonElement.type).toBe('button');
    expect(formButtonElement.innerText).toBe('label');
  });

  it('sets dynamic form button to hidden', () => {
    const formButtonDebugElement = fixture.debugElement.query(By.css('button.dynamic-form-button'));
    const formButtonElement = formButtonDebugElement.nativeElement as HTMLButtonElement;

    expect(formButtonElement.className).toBe('mat-focus-indicator dynamic-form-button mat-flat-button mat-button-base mat-primary');

    component.template.hidden = true;
    fixture.detectChanges();

    expect(formButtonElement.className).toBe('mat-focus-indicator dynamic-form-button mat-flat-button mat-button-base mat-primary hidden');
  });

  it('sets class name of dynamic form button', () => {
    const formButtonDebugElement = fixture.debugElement.query(By.css('button.dynamic-form-button'));
    const formButtonElement = formButtonDebugElement.nativeElement as HTMLButtonElement;

    expect(formButtonElement.className).toBe('mat-focus-indicator dynamic-form-button mat-flat-button mat-button-base mat-primary');

    component.template.className = 'className1 className2';
    fixture.detectChanges();

    expect(formButtonElement.className).toBe(
      'mat-focus-indicator dynamic-form-button mat-flat-button mat-button-base mat-primary className1 className2',
    );

    component.template.className = null;
    fixture.detectChanges();

    expect(formButtonElement.className).toBe('mat-focus-indicator dynamic-form-button mat-flat-button mat-button-base mat-primary');
  });
});
