import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormExampleComponent } from '../dynamic-form-example.component';

@Component({
  selector: 'app-truly-examples',
  templateUrl: './truly-examples.component.html',
  styleUrls: ['./truly-examples.component.scss']
})
export class TrulyExamplesComponent extends DynamicFormExampleComponent {
  constructor(protected route: ActivatedRoute, protected dialog: MatDialog) {
    super(route, dialog);
  }
}
