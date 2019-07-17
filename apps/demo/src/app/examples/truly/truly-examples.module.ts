import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicFormsTrulyModule } from '@dynamic-forms/truly';
import { DynamicFormExampleModule } from '../dynamic-form-example.module';
import { DynamicFormExampleResolver } from '../dynamic-form-example.resolver';
import { TrulyExamplesComponent } from './truly-examples.component';

@NgModule({
  imports: [
    DynamicFormExampleModule,
    DynamicFormsTrulyModule.forRoot(),
    RouterModule.forChild([
      {
        path: ':exampleId',
        component: TrulyExamplesComponent,
        resolve: {
          definition: DynamicFormExampleResolver
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
