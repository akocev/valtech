import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { dummyAction, getImages, getImagesSuccess } from './dashboard.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  filter,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { getDashboard } from './dashboard.selector';
import { of } from 'rxjs';
import {
  RouterNavigatedAction,
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
import { DashboardService } from 'app/services/dashboard.service';
import { AppState } from 'app/store/app.state';

@Injectable()
export class DashboardEffects {
  constructor(private actions$: Actions, private dashboardService: DashboardService, private store: Store<AppState>) {}

  loadImages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getImages),
      withLatestFrom(this.store.select(getDashboard)),
      mergeMap(([action, images]) => {
        if (!images.length || images.length === 1) {
          return this.dashboardService.getImages().pipe(
            map((images) => {
              return getImagesSuccess({ images });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

  getSingleImage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/dashboard/details');
      }),
      map((r: RouterNavigatedAction) => {
        const routerState = r.payload.routerState as any;
        return routerState['params']['id'];
      }),
      withLatestFrom(this.store.select(getDashboard)),
      switchMap(([id, images]) => {
        if (!images.length) {
          return this.dashboardService.getImageById(id).pipe(
            map((image) => {
              const imageData = [{...image, id}];
              return getImagesSuccess({images: imageData});
            })
          )
        }
        return of(dummyAction());
      })
    )
  })
}
