import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DynamicFormButtonDefinition, DynamicFormButtonTemplate, DynamicFormElement } from '@dynamic-forms/core';
import { MatDynamicFormButtonComponent } from './dynamic-form-button.component';

describe('MatDynamicFormButtonComponent', () => {
  let fixture: ComponentFixture<MatDynamicFormButtonComponent>;
  let component: MatDynamicFormButtonComponent;
  let element: DynamicFormElement<DynamicFormButtonTemplate, DynamicFormButtonDefinition>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MatDynamicFormButtonComponent
      ]
    });

    fixture = TestBed.createComponent(MatDynamicFormButtonComponent);
    component = fixture.componentInstance;

    const template = <DynamicFormButtonTemplate>{ label: 'label' };
    const definition = <DynamicFormButtonDefinition>{ type: 'element', template };
    element = new DynamicFormElement<DynamicFormButtonTemplate, DynamicFormButtonDefinition>(definition);
    component.element = element;

    fixture.detectChanges();
  }));

  it('creates component', () => {
    expect(component.element).toBe(element);
    expect(component.template.label).toBe('label');
  });

  it('creates component template', () => {
    const formContentDebugElement = fixture.debugElement.query(By.css('button.dynamic-form-button'));
    const formContentElement = <HTMLElement>formContentDebugElement.nativeElement;

    expect(formContentElement).toBeDefined();
    expect(formContentElement.innerHTML).toBe('label');
  });

  it('sets class name of dynamic form button', () => {
    const formContentDebugElement = fixture.debugElement.query(By.css('button.dynamic-form-button'));
    const formContentElement = <HTMLElement>formContentDebugElement.nativeElement;

    expect(formContentElement.className).toBe('dynamic-form-button');

    component.template.className = 'className1 className2';
    fixture.detectChanges();

    expect(formContentElement.className).toBe('dynamic-form-button className1 className2');

    component.template.className = null;
    fixture.detectChanges();

    expect(formContentElement.className).toBe('dynamic-form-button');
  });
});
