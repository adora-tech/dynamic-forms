import { async, TestBed } from '@angular/core/testing';
import { DynamicFormComponentFactory, DynamicFormConfigService, DynamicFormValidationService} from '@dynamic-forms/core';
import { DynamicFormControlClarityComponent } from './dynamic-form-control.component';
import { DynamicFormControlClarityModule } from './dynamic-form-control.module';

describe('DynamicFormControlClarityComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DynamicFormControlClarityModule
      ],
      providers: [
        {
          provide: DynamicFormConfigService,
          useValue: new DynamicFormConfigService({
            module: 'clarity'
          })
        },
        DynamicFormValidationService,
        DynamicFormComponentFactory
      ]
    });
  }));

  it('creates component', () => {
    const fixture = TestBed.createComponent(DynamicFormControlClarityComponent);
    const component = fixture.componentInstance;

    expect(component).toBeDefined();
  });
});
