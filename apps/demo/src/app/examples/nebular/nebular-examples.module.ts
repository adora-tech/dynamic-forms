import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbDynamicFormsModule } from '@dynamic-forms/nebular';
import { DynamicFormExampleModule } from '../dynamic-form-example.module';
import { DynamicFormExampleResolver } from '../dynamic-form-example.resolver';
import { NebularExamplesComponent } from './nebular-examples.component';

@NgModule({
  imports: [
    DynamicFormExampleModule,
    NbDynamicFormsModule.forRoot(),
    RouterModule.forChild([
      {
        path: ':exampleId',
        component: NebularExamplesComponent,
        resolve: {
          definition: DynamicFormExampleResolver
        }
      }
    ])
  ],
  declarations: [
    NebularExamplesComponent
  ],
  exports: [
    RouterModule
  ]
})
export class NebularExamplesModule {}
