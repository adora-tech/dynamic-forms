import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormExampleComponent } from '../dynamic-form-example.component';

@Component({
  selector: 'app-clarity-examples',
  templateUrl: './clarity-examples.component.html',
  styleUrls: ['./clarity-examples.component.scss']
})
export class ClarityExamplesComponent extends DynamicFormExampleComponent  {
  constructor(protected route: ActivatedRoute, protected dialog: MatDialog) {
    super(route, dialog);
  }
}
