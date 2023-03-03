import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { appReducer } from './store/app.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AlbumsListComponent } from './albums/components/albums-list/albums-list.component';
import { DashboardService } from './services/dashboard.service';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './dashboard/state/dashboard.effects';
import { HttpClientModule } from '@angular/common/http';
import { ImageDetailComponent } from './dashboard/components/image-detail/image-detail.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './store/router/custom-serializer';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AlbumModalComponent } from './albums/components/album-modal/album-modal.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AlbumDetailsComponent } from './albums/components/album-details/album-details.component';
import { StoreFacadeService } from './store/store-facade.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    AlbumsListComponent,
    ImageDetailComponent,
    AlbumModalComponent,
    AlbumDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([DashboardEffects]),
    BrowserAnimationsModule,
    HttpClientModule,
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
  providers: [DashboardService, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}, StoreFacadeService],
  bootstrap: [AppComponent],
  exports: [
    MatFormFieldModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
