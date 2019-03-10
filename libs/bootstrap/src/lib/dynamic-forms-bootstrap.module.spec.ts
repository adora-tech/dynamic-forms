import { async, inject, TestBed } from '@angular/core/testing';
import { DynamicFormBuilder, DynamicFormComponentFactory, DynamicFormConfig, DynamicFormConfigService,
  DynamicFormFieldExpressionsBuilder, DynamicFormValidationBuilder, DYNAMIC_FORM_CONFIG } from '@dynamic-forms/core';
import { bsDynamicFormConfig } from './dynamic-forms-bootstrap.config';
import { DynamicFormsBootstrapModule } from './dynamic-forms-bootstrap.module';

describe('DynamicFormsMaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DynamicFormsBootstrapModule.forRoot()
      ]
    }).compileComponents();
  }));

  it('provides DYNAMIC_FORM_CONFIG',
    inject([DYNAMIC_FORM_CONFIG], (configs: DynamicFormConfig[]) => {
      expect(configs.length).toBe(1);
      expect(configs[0]).toEqual(bsDynamicFormConfig);
    })
  );

  it('provides DynamicFormConfigService',
    inject([DynamicFormConfigService], (service: DynamicFormConfigService) => {
      expect(service.config).toEqual(bsDynamicFormConfig);
    })
  );

    it('provides DynamicFormBuilder',
    inject([DynamicFormBuilder], (service: DynamicFormBuilder) => {
      expect(service).toBeDefined();
    })
  );

  it('provides DynamicFormFieldExpressionsBuilder',
    inject([DynamicFormFieldExpressionsBuilder], (service: DynamicFormFieldExpressionsBuilder) => {
      expect(service).toBeDefined();
    })
  );

  it('provides DynamicFormValidationBuilder',
    inject([DynamicFormValidationBuilder], (service: DynamicFormValidationBuilder) => {
      expect(service).toBeDefined();
    })
  );

  it('provides DynamicFormComponentFactory',
    inject([DynamicFormComponentFactory], (service: DynamicFormComponentFactory) => {
      expect(service).toBeDefined();
    })
  );
});