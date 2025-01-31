# Changelog

## 14.1.0 (2022-06-24)

* **markdown:** release of library using angular 14 and marked

## 14.1.0-rc.1 (2022-06-24)

### Features

* **core:** added ```valueChange``` emitter to ```DynamicFormComponent```

## 14.0.2 (2022-06-23)

### Features

* **core:** added ```valueChange``` emitter to ```DynamicFormComponent```

## 14.1.0-next.1 (2022-06-20)

### Breaking Changes

* **core:** made use of [typed reactive forms](https://angular.io/guide/typed-forms) by adding generic parameters ```Value = any, Model extends Value = Value``` to abstract classes ```DynamicFormField```, ```DynamicFormFieldBase```, ```DynamicFormFieldWrapperBase``` and its derived classes / components for form controls / inputs, groups, arrays and dictionarys

## 14.1.0-next.0 (2022-06-19)

### Features

* **markdown:** created library by extracting markdown module from core

### Breaking Changes

* **core:** removed markdown module and peer dependency to marked (import ```DynamicFormMarkdownModule``` from ```@dynamic-forms/markdown``` instead of ```@dynamic-forms/core```)

## 14.0.1 (2022-06-07)

### Features

* **core:** styles for markdown (file ```markdown.scss``` in directory ```assets/scss```)

## 14.0.0 (2022-06-04)

### Features

* **core:** release of library using angular 14
* **bootstrap:** release of library using angular 14
* **material:** release of library using angular material 14

## 14.0.0-rc.1 (2022-05-24)

### Features

* **core:** release candidate of library using angular 14
* **bootstrap:** release candidate of library using angular 14
* **material:** release candidate of library using angular material 14

## 14.0.0-next.1 (2022-04-26)

### Features

* **core:** next version of library using angular 14
* **bootstrap:** next version of library using angular 14
* **material:** next version of library using angular material 14

## 14.0.0-next.0 (2022-04-25)

### Features

* **core:** next version of library using angular 14
* **bootstrap:** next version of library using angular 14
* **material:** next version of library using angular material 14

### Breaking Changes

* **bootstrap:** removed ```DynamicFormMarkdownModule``` from imports of ```BsDynamicFormsModule``` to get rid of implicit dependency to ```marked``` library (use explicit import instead)
* **material:** removed ```DynamicFormMarkdownModule``` from imports of ```MatDynamicFormsModule``` to get rid of implicit dependency to ```marked``` library (use explicit import instead)

## 13.0.0 (2022-01-15)

### Features

* **core:** update of marked (4.0.10) to fix vulnerability

## 13.0.0-rc.0 (2022-01-15)

### Features

* **core:** release candidate of library using angular 13
* **bootstrap:** release candidate of library using angular 13
* **material:** release candidate of library using angular material 13

## 13.0.0-next.1 (2022-01-14)

### Features

* **core:** next version of library using angular 13
* **bootstrap:** next version of library using angular 13
* **material:** next version of library using angular material 13

### General

* update of peer dependencies: angular (13.1.2) to include compiler-cli fix [#44587](https://github.com/angular/angular/pull/44587)
* update of peer dependencies: tslib (2.3.0), rxjs (7.4.0) and marked (4.0.0)

### Breaking Changes

* **core:** constructor of ```DynamicFormFieldValidatorBase``` (and its derived classes ```DynamicFormFieldValidator``` and ```DynamicFormFieldAsyncValidator```) has new sequence for parameters (parameter for factory was moved from last to first place)
* **core:** constructor of ```DynamicFormFieldValidatorBase``` (and its derived classes ```DynamicFormFieldValidator``` and ```DynamicFormFieldAsyncValidator```) has new parameter ```deps``` to support dependencies (like ```HttpClient```) which can be provided in the registration of validator types within ```DynamicFormValidationModule``` (see basic interfaces ```DynamicFormFieldValidatorType``` and ```DynamicFormFieldAsyncValidatorType```)

### Feature

* **core:** support of async validators

## 13.0.0-next.0 (2021-11-07)

### Features

* **core:** next version of library using angular 13 (next)
* **bootstrap:** next version of library using angular 13 (next)
* **material:** next version of library using angular material 13 (next)

### Breaking Changes

* **core:** constructor of ```DynamicFormElement``` (and its derived classes like ```DynamicFormAction``` and ```DynamicFormField```) has new parameter for ```DynamicFormBuilder``` to support updates of expressions, children, actions, validators, etc. from within the classes (especially in new method ```init()```)
* **core:** improved ```DynamicFormBuilder``` by using the method ```init()``` of ```DynamicFormElement``` for initialization

### Bug Fixes

* **core:** improved method ```resetDefault()``` of class ```DynamicFormArray``` to reflect the length of children that result from either the default length or the length of the default value
* **core:** improved method ```resetDefault()``` of class ```DynamicFormDictionary``` to reflect the length of children that result from either the length of default keys or the length of keys from the default value

### Feature

* **core:** method ```resetEmpty()``` of ```DynamicFormArray``` clears children and sets model / value to an empty array
* **core:** method ```resetEmpty()``` of ```DynamicFormDictionary``` clears children and sets model / value to an empty object

## 12.1.1 (2021-05-16)

### Bug Fixes

* **material:** fixed template of dynamic form dialog

## 11.1.1 (2021-05-16)

### Bug Fixes

* **material:** fixed template of dynamic form dialog

## 10.0.2 (2021-05-16)

### Bug Fixes

* **material:** fixed package version

## 12.0.1 (2021-05-16)

### Bug Fixes

* **material:** fixed template of dynamic form dialog

## 11.0.1 (2021-05-16)

### Bug Fixes

* **material:** fixed template of dynamic form dialog

## 10.0.1 (2021-05-16)

### Bug Fixes

* **material:** fixed template of dynamic form dialog

## 9.0.1 (2021-05-16)

### Bug Fixes

* **material:** fixed template of dynamic form dialog

## 8.0.1 (2021-05-16)

### Bug Fixes

* **material:** fixed template of dynamic form dialog

## 12.1.0 (2021-05-13)

### Features

* **core:** use boostrap 5
* **bootstrap:** use boostrap 5

## 11.1.0 (2021-05-13)

### Features

* **core:** use boostrap 5
* **bootstrap:** use boostrap 5

## 12.0.0 (2021-05-12)

### Features

* **core:** release candidate of library using angular 12
* **bootstrap:** release candidate of library using angular 12
* **material:** release candidate of library using angular material 12

## 12.0.0-rc.1 (2021-05-03)

### Features

* **core:** release candidate of library using angular 12 (release candidate 1)
* **bootstrap:** release candidate of library using angular 12 (release candidate 1)
* **material:** release candidate of library using angular material 12 (release candidate 1)

## 12.0.0-rc.0 (2021-04-23)

### Features

* **core:** release candidate of library using angular 12 (release candidate)
* **bootstrap:** release candidate of library using angular 12 (release candidate)
* **material:** release candidate of library using angular material 12 (release candidate)

## 12.0.0-next.0 (2021-04-14)

### Features

* **core:** next version of library using angular 12 (next)
* **bootstrap:** next version of library using angular 12 (next)
* **material:** next version of library using angular material 12 (next)

## 11.0.0 (2021-04-14)

### Features

* **core:** release of library using angular 11
* **bootstrap:** release of library using angular 11
* **material:** release of library using angular material 11

## 10.0.0 (2021-04-14)

### Features

* **core:** release of library using angular 10
* **bootstrap:** release of library using angular 10
* **material:** release of library using angular material 10

## 9.0.0 (2021-04-14)

### Features

* **core:** release of library using angular 9
* **bootstrap:** release of library using angular 9
* **material:** release of library using angular material 9

## 8.0.0 (2021-04-14)

### Features

* **core:** release of library using angular 8
* **core:** dynamic form based on reactive forms and JSON definition for elements, fields and actions
* **core:** dynamic form element for content elements (like HTML, markdown, etc.)
* **core:** dynamic form fields (control, group, array and dictionary) for form inputs
* **core:** dynamic form action for triggering events handled by dynamic form fields
* **bootstrap:** release of library using angular 8, bootstrap and HTML5
* **bootstrap:** dynamic form inputs (checkbox, combobox, datepicker, numberbox, radio, select, switch, textarea, textbox, toggle)
* **material:** release of library using angular material 8
* **material:** dynamic form inputs (checkbox, combobox, datepicker, numberbox, radio, select, switch, textarea, textbox, toggle) making use of material form fields
