import { async, TestBed } from '@angular/core/testing';
import { DynamicFormLabelWrapperClarityComponent } from './dynamic-form-label-wrapper.component';
import { DynamicFormWrapperClarityModule } from './dynamic-form-wrapper.module';

describe('DynamicFormLabelWrapperClarityComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DynamicFormWrapperClarityModule
      ]
    });
  }));

  it('creates component', () => {
    const fixture = TestBed.createComponent(DynamicFormLabelWrapperClarityComponent);
    const component = fixture.componentInstance;

    expect(component).toBeDefined();
  });
});
