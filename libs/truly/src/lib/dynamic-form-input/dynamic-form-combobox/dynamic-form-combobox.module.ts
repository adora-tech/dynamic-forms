import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule} from 'truly-ui';
import { TlDynamicFormComboboxComponent } from './dynamic-form-combobox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutoCompleteModule
  ],
  declarations: [
    TlDynamicFormComboboxComponent
  ],
  entryComponents: [
    TlDynamicFormComboboxComponent
  ]
})
export class TlDynamicFormComboboxModule {}
