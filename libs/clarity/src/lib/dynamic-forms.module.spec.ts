import { async, inject, TestBed } from '@angular/core/testing';
import { DynamicFormBuilder, DynamicFormComponentFactory, DynamicFormConfig, DynamicFormConfigService,
  DynamicFormExpressionBuilder, DynamicFormValidationBuilder, DynamicFormValidationService,
  DYNAMIC_FORM_CONFIG,
  DYNAMIC_FORM_LIBRARY} from '@dynamic-forms/core';
import { clrDynamicFormConfig } from './dynamic-forms.config';
import { ClrDynamicFormsModule } from './dynamic-forms.module';

describe('ClrDynamicFormsModule', () => {
  describe('without providers', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          ClrDynamicFormsModule
        ]
      }).compileComponents();
    }));

    it('does not provide DYNAMIC_FORM_LIBRARY', () => {
      expect(() => TestBed.get(DYNAMIC_FORM_LIBRARY)).toThrowError(/StaticInjectorError/);
    });

    it('does not provide DYNAMIC_FORM_CONFIG', () => {
      expect(() => TestBed.get(DYNAMIC_FORM_CONFIG)).toThrowError(/StaticInjectorError/);
    });

    it('does not provide DynamicFormConfigService', () => {
      expect(() => TestBed.get(DynamicFormConfigService)).toThrowError(/StaticInjectorError/);
    });

    it('does not provide DynamicFormBuilder', () => {
      expect(() => TestBed.get(DynamicFormBuilder)).toThrowError(/StaticInjectorError/);
    });

    it('does not provide DynamicFormExpressionBuilder', () => {
      expect(() => TestBed.get(DynamicFormExpressionBuilder)).toThrowError(/StaticInjectorError/);
    });

    it('does not provide DynamicFormValidationBuilder', () => {
      expect(() => TestBed.get(DynamicFormValidationBuilder)).toThrowError(/StaticInjectorError/);
    });

    it('does not provide DynamicFormValidationService', () => {
      expect(() => TestBed.get(DynamicFormValidationService)).toThrowError(/StaticInjectorError/);
    });

    it('does not provide DynamicFormComponentFactory', () => {
      expect(() => TestBed.get(DynamicFormComponentFactory)).toThrowError(/StaticInjectorError/);
    });
  });

  describe('forRoot with default config', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          ClrDynamicFormsModule.forRoot()
        ]
      }).compileComponents();
    }));

    it('provides DYNAMIC_FORM_LIBRARY',
      inject([DYNAMIC_FORM_LIBRARY], (library: string) => {
        expect(library).toBe('clarity');
      })
    );

    it('provides DYNAMIC_FORM_CONFIG',
      inject([DYNAMIC_FORM_CONFIG], (configs: DynamicFormConfig[]) => {
        expect(configs.length).toBe(1);
        expect(configs[0]).toEqual(clrDynamicFormConfig);
      })
    );

    it('provides DynamicFormConfigService',
      inject([DynamicFormConfigService], (service: DynamicFormConfigService) => {
        expect(service.config).toEqual(clrDynamicFormConfig);
      })
    );

    it('provides DynamicFormBuilder',
      inject([DynamicFormBuilder], (service: DynamicFormBuilder) => {
        expect(service).toBeDefined();
      })
    );

    it('provides DynamicFormExpressionBuilder',
      inject([DynamicFormExpressionBuilder], (service: DynamicFormExpressionBuilder) => {
        expect(service).toBeDefined();
      })
    );

    it('provides DynamicFormValidationBuilder',
      inject([DynamicFormValidationBuilder], (service: DynamicFormValidationBuilder) => {
        expect(service).toBeDefined();
      })
    );

    it('provides DynamicFormValidationService',
      inject([DynamicFormValidationService], (service: DynamicFormValidationService) => {
        expect(service).toBeDefined();
      })
    );

    it('provides DynamicFormComponentFactory',
      inject([DynamicFormComponentFactory], (service: DynamicFormComponentFactory) => {
        expect(service).toBeDefined();
      })
    );
  });

  describe('forRoot with provided config', () => {
    const config: DynamicFormConfig = {
      library: 'clarity-extended'
    };

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          ClrDynamicFormsModule.forRoot(config)
        ]
      }).compileComponents();
    }));

    it('provide DYNAMIC_FORM_LIBRARY',
      inject([DYNAMIC_FORM_LIBRARY], (library: string) => {
        expect(library).toBe('clarity-extended');
      })
    );

    it('provides DYNAMIC_FORM_CONFIG',
      inject([DYNAMIC_FORM_CONFIG], (configs: DynamicFormConfig[]) => {
        expect(configs.length).toBe(1);
        expect(configs[0]).toEqual(config);
      })
    );

    it('provides DynamicFormConfigService',
      inject([DynamicFormConfigService], (service: DynamicFormConfigService) => {
        expect(service.config).toEqual(config);
      })
    );
  });
});
