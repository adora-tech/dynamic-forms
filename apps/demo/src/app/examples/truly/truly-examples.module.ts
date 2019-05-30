import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicFormsMaterialModule } from '@dynamic-forms/truly';
import { DynamicFormExampleModule } from '../dynamic-form-example.module';
import { DynamicFormTemplateResolver } from '../dynamic-form-template.resolver';
import { TrulyExamplesComponent } from './truly-examples.component';

@NgModule({
  imports: [
    DynamicFormExampleModule,
    DynamicFormsMaterialModule.forRoot(),
    RouterModule.forChild([
      {
        path: ':templateId',
        component: TrulyExamplesComponent,
        resolve: {
          template: DynamicFormTemplateResolver
        }
      }
    ])
  ],
  declarations: [
    TrulyExamplesComponent
  ],
  exports: [
    RouterModule
  ]
})
export class TrulyExamplesModule {}
