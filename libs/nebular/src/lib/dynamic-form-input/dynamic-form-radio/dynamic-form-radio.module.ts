import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { nbDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { NbDynamicFormRadioComponent } from './dynamic-form-radio.component';

export const nbDynamicFormRadioType: DynamicFormInputType = {
  type: 'radio',
  component: NbDynamicFormRadioComponent,
  libraryName: nbDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormConfigModule.withInput(nbDynamicFormRadioType)
  ],
  declarations: [
    NbDynamicFormRadioComponent
  ],
  exports: [
    NbDynamicFormRadioComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    NbDynamicFormRadioComponent
  ]
})
export class NbDynamicFormRadioModule {}
