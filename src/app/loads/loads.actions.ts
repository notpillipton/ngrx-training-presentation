import { createAction, props } from '@ngrx/store';
import { Load } from './loads.service';

export const newLoads = createAction(
    '[Button] Trigger New Loads'
);

export const newLoadsSuccess = createAction(
    '[Loads Service] New Loads Success',
    props<{ newLoads: Load[] }>()
);

export const newLoadNumbers = createAction(
    '[Button] Trigger New Load Numbers'
);

export const newLoadNumbersSuccess = createAction(
    '[Loads Service] New Load Numbers Success',
    props<{ newLoadNumbers: string[] }>()
);
