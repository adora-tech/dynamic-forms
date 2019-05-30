import { async, TestBed } from '@angular/core/testing';
import { DynamicFormConfigService, DynamicFormValidationService} from '@dynamic-forms/core';
import { DynamicFormValidationClarityComponent } from './dynamic-form-validation.component';
import { DynamicFormValidationClarityModule } from './dynamic-form-validation.module';

describe('DynamicFormValidationClarityComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DynamicFormValidationClarityModule
      ],
      providers: [
        {
          provide: DynamicFormConfigService,
          useValue: new DynamicFormConfigService({
            module: 'clarity'
          })
        },
        DynamicFormValidationService
      ]
    }).compileComponents();
  }));

  it('creates component', () => {
    const fixture = TestBed.createComponent(DynamicFormValidationClarityComponent);
    const component = fixture.componentInstance;

    expect(component).toBeDefined();
  });
});
