import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule} from 'truly-ui';
import { DynamicFormComboboxComponent } from './dynamic-form-combobox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutoCompleteModule
  ],
  declarations: [
    DynamicFormComboboxComponent
  ],
  entryComponents: [
    DynamicFormComboboxComponent
  ]
})
export class DynamicFormComboboxModule {}
