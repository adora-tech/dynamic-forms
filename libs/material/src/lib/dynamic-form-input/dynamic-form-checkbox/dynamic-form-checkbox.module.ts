import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { matDynamicFormLibrary } from '../../dynamic-form-library/dynamic-form-library';
import { MatDynamicFormCheckboxComponent } from './dynamic-form-checkbox.component';

export const matDynamicFormCheckboxType: DynamicFormInputType = {
  type: 'checkbox',
  component: MatDynamicFormCheckboxComponent,
  libraryName: matDynamicFormLibrary.name,
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    DynamicFormConfigModule.withInput(matDynamicFormCheckboxType),
  ],
  declarations: [
    MatDynamicFormCheckboxComponent,
  ],
  exports: [
    DynamicFormConfigModule,
    MatDynamicFormCheckboxComponent,
  ],
})
export class MatDynamicFormCheckboxModule {}
