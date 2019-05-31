import { async, TestBed } from '@angular/core/testing';
import { ClrDynamicFormControlLabelComponent  } from './dynamic-form-control-label.component';
import { ClrDynamicFormWrapperModule } from './dynamic-form-wrapper.module';

describe('ClrDynamicFormControlLabelComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClrDynamicFormWrapperModule
      ]
    });
  }));

  it('creates component', () => {
    const fixture = TestBed.createComponent(ClrDynamicFormControlLabelComponent );
    const component = fixture.componentInstance;

    expect(component).toBeDefined();
  });
});
