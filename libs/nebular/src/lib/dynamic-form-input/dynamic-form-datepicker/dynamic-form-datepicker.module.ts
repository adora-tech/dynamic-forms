import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { nbDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { NbDynamicFormDatepickerComponent } from './dynamic-form-datepicker.component';

export const nbDynamicFormDatepickerType: DynamicFormInputType = {
  type: 'datepicker',
  component: NbDynamicFormDatepickerComponent,
  libraryName: nbDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormConfigModule.withInput(nbDynamicFormDatepickerType)
  ],
  declarations: [
    NbDynamicFormDatepickerComponent
  ],
  exports: [
    NbDynamicFormDatepickerComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    NbDynamicFormDatepickerComponent
  ]
})
export class NbDynamicFormDatepickerModule {}
