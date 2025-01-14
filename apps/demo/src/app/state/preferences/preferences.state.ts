import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetPreferences } from './preferences.actions';
import { defaultPreferences, FormEditorPreferences, Preferences, PREFERENCES } from './preferences.model';

@State<Preferences>({
  name: PREFERENCES,
  defaults: defaultPreferences,
})
@Injectable()
export class PreferencesState {
  @Selector()
  static formEditor(state: Preferences): FormEditorPreferences {
    return state?.formEditor;
  }

  @Action(SetPreferences)
  setPreferences(ctx: StateContext<Preferences>, { payload }: SetPreferences) {
    ctx.setState(payload);
  }
}
