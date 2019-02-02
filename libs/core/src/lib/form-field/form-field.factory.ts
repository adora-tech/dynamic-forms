import { ComponentFactory, ComponentFactoryResolver, Injectable, ViewContainerRef, Inject } from '@angular/core';
import { FORM_CONFIG } from '../form/form.config';
import { FormConfig } from '../form/models/form.config';
import { FormField } from './models/form.field';
import { FormFieldBase } from './form-field.base';
import { FormFieldType } from './models/form-field.template';

@Injectable()
export class FormFieldFactory {
  constructor(
    @Inject(FORM_CONFIG) private formConfig: FormConfig,
    private componentFactoryResolver: ComponentFactoryResolver) {}

  public createComponent(containerRef: ViewContainerRef, field: FormField) {
    const componentFactory = this.getComponentFactory(field);
    const componentRef = containerRef.createComponent(componentFactory);
    componentRef.instance.formField = field;
    return componentRef;
  }

  private getComponentFactory(field: FormField): ComponentFactory<FormFieldBase> {
    const resolver = this.componentFactoryResolver;
    const fieldConfig = this.getFieldConfig(field.template.type);
    return resolver.resolveComponentFactory(fieldConfig.component);
  }

  private getFieldConfig(type: FormFieldType) {
    const config = this.formConfig.fieldConfig;
    return config.types.find(f => f.type === type);
  }
}
