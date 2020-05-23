import { DynamicFormActionDefinition } from '../../dynamic-form-action/dynamic-form-action-definition';
import { DynamicFormElementDefinition } from '../dynamic-form-element-definition';
import { DynamicFormModalTemplate } from './dynamic-form-modal-template';

export interface DynamicFormModalDefinition extends DynamicFormElementDefinition<DynamicFormModalTemplate> {
  trigger: DynamicFormActionDefinition;
  elements: DynamicFormElementDefinition[];
  actions?: DynamicFormActionDefinition[];
}
