import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicFormsClarityModule } from '@dynamic-forms/clarity';
import { DynamicFormExampleModule } from '../dynamic-form-example.module';
import { DynamicFormTemplateResolver } from '../dynamic-form-template.resolver';
import { ClarityExamplesComponent } from './clarity-examples.component';

@NgModule({
  imports: [
    DynamicFormExampleModule,
    DynamicFormsClarityModule.forRoot(),
    RouterModule.forChild([
      {
        path: ':templateId',
        component: ClarityExamplesComponent,
        resolve: {
          template: DynamicFormTemplateResolver
        }
      }
    ])
  ],
  declarations: [
    ClarityExamplesComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ClarityExamplesModule {}
