import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbDynamicFormsModule } from '@dynamic-forms/nebular';
import { NbButtonModule, NbThemeModule } from '@nebular/theme';
import { DynamicFormExampleModule } from '../dynamic-form-example.module';
import { DynamicFormExampleResolver } from '../dynamic-form-example.resolver';
import { NebularExamplesComponent } from './nebular-examples.component';

@NgModule({
  imports: [
    DynamicFormExampleModule,
    NbThemeModule.forRoot(),
    NbButtonModule,
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
