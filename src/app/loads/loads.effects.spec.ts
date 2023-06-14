import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoadsEffects } from './loads.effects';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: LoadsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LoadsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
