import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'' , redirectTo: '/home',pathMatch:"full" },
  { path:'create', component:CreateUserComponent },
  { path: 'edit/:id', component:CreateUserComponent },
  { path: 'details/:id', component:DetailsComponent },
  { path: '**', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
