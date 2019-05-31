import { async, TestBed } from '@angular/core/testing';
import { DynamicFormComponentFactory, DynamicFormConfigService, DynamicFormValidationService} from '@dynamic-forms/core';
import { ClrDynamicFormControlComponent } from './dynamic-form-control.component';
import { ClrDynamicFormControlModule } from './dynamic-form-control.module';

describe('ClrDynamicFormControlComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClrDynamicFormControlModule
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
    const fixture = TestBed.createComponent(ClrDynamicFormControlComponent);
    const component = fixture.componentInstance;

    expect(component).toBeDefined();
  });
});
