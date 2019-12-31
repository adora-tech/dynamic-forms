import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormExampleComponent } from '../dynamic-form-example.component';

@Component({
  selector: 'app-nebular-examples',
  templateUrl: './nebular-examples.component.html',
  styleUrls: ['./nebular-examples.component.scss']
})
export class NebularExamplesComponent extends DynamicFormExampleComponent {
  constructor(protected route: ActivatedRoute, protected dialog: MatDialog) {
    super(route, dialog);
  }
}
