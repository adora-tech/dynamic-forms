import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FormExampleBase } from '../form-example-base';

@Component({
  selector: 'app-bootstrap-examples',
  templateUrl: './bootstrap-examples.component.html',
})
export class BootstrapExamplesComponent extends FormExampleBase {
  constructor(protected override route: ActivatedRoute, protected override dialog: MatDialog) {
    super(route, dialog);
  }
}
