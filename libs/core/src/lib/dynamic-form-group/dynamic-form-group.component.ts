import { Component } from '@angular/core';
import { DynamicFormValidationService } from '../dynamic-form-validation/dynamic-form-validation.service';
import { DynamicFormGroup } from './dynamic-form-group';
import { DynamicFormGroupBase } from './dynamic-form-group-base';
import { DynamicFormGroupDefinition } from './dynamic-form-group-definition';
import { DynamicFormGroupTemplate } from './dynamic-form-group-template';

@Component({
  selector: 'dynamic-form-group',
  templateUrl: './dynamic-form-group.component.html',
})
export class DynamicFormGroupComponent<
  Template extends DynamicFormGroupTemplate = DynamicFormGroupTemplate,
  Definition extends DynamicFormGroupDefinition<Template> = DynamicFormGroupDefinition<Template>,
  Group extends DynamicFormGroup<Template, Definition> = DynamicFormGroup<Template, Definition>
> extends DynamicFormGroupBase<Template, Definition, Group> {

  constructor(protected override validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
