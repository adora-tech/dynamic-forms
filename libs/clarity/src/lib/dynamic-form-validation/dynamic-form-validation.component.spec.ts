import { async, TestBed } from '@angular/core/testing';
import { DynamicFormConfigService, DynamicFormValidationService} from '@dynamic-forms/core';
import { ClrDynamicFormValidationComponent } from './dynamic-form-validation.component';
import { ClrDynamicFormValidationModule } from './dynamic-form-validation.module';

describe('ClrDynamicFormValidationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClrDynamicFormValidationModule
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
    const fixture = TestBed.createComponent(ClrDynamicFormValidationComponent);
    const component = fixture.componentInstance;

    expect(component).toBeDefined();
  });
});
