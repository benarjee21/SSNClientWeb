import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRegistrationComponent } from './components/new-registration/new-registration.component';


const routes: Routes = [
  {path:'register',component:NewRegistrationComponent},
  {path:'',component:NewRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
