import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthComponent } from './authentications/admin-auth/admin-auth.component';
import { NotFoundComponent } from './authentications/not-found/not-found.component';
import { LoginAuthGuard } from './guard/login-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'admin-auth', pathMatch: 'full' },
  { path: 'admin-auth', component: AdminAuthComponent },
  {path: 'admin', canActivate:[LoginAuthGuard], loadChildren: () => import('./module/admin-dashboard/admin-dashboard.module').then((m)=> m.AdminDashboardModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
