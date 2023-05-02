import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'users', component: UserCreateComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  declarations: [],
  imports: [CommonModule,
            RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
