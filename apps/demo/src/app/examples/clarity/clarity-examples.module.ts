import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClrDynamicFormsModule } from '@dynamic-forms/clarity';
import { DynamicFormExampleModule } from '../dynamic-form-example.module';
import { DynamicFormExampleResolver } from '../dynamic-form-example.resolver';
import { ClarityExamplesComponent } from './clarity-examples.component';

@NgModule({
  imports: [
    DynamicFormExampleModule,
    ClrDynamicFormsModule.forRoot(),
    RouterModule.forChild([
      {
        path: ':exampleId',
        component: ClarityExamplesComponent,
        resolve: {
          definition: DynamicFormExampleResolver
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
