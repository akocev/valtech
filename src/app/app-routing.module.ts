import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { ImageDetailComponent } from './dashboard/components/image-detail/image-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'dashboard/details/:id',
    component: ImageDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
