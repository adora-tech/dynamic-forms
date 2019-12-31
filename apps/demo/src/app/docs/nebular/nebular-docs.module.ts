import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NebularCoverageComponent } from './coverage/nebular-coverage.component';
import { NebularDocsComponent } from './nebular-docs.component';

const routes: Routes = [
  {
    path: 'docs/nebular',
    component: NebularDocsComponent
  },
  {
    path: 'docs/nebular/coverage',
    component: NebularCoverageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NebularDocsComponent,
    NebularCoverageComponent
  ],
  exports: [
    RouterModule
  ]
})
export class NebularDocsModule {}
