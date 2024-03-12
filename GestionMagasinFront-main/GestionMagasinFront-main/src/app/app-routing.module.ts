import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/admin-layout/dashboard/dashboard.component';
import { ListFactureComponent } from './layouts/admin-layout/list-facture/list-facture.component';
import { LoginComponent } from './layouts/auth-layout/login/login.component';

const routes: Routes = [
 // {path:'auth',loadChildren: ()=>import('./layouts/auth-layout/auth-layout.module').then(m=>m.AuthLayoutModule)},
  {path:'client',loadChildren: ()=>import('./layouts/client-layout/client-layout.module').then(m=>m.ClientLayoutModule)},
  {path:'admin',  loadChildren: ()=>import('./layouts/admin-layout/admin-layout.module').then(m=>m.AdminLayoutModule)},
//Auth
{
  path:'',
  component: LoginComponent,
  children:[
    {
      path:"",
      redirectTo:"/login",
      pathMatch:"full"
    },
    {
      path:'auth',
      loadChildren: ()=>import('./layouts/auth-layout/auth-layout.module').then(m=>m.AuthLayoutModule)

    }
  ]
}

// {
//   path:'',
//   component: DashboardComponent ,
//   children:[
//     {
//       path:"",
//       redirectTo:"/admin/Dashboard",
//       pathMatch:"full"
//     },
//     {
//       path:'admin',
//       loadChildren: ()=>import('./layouts/admin-layout/admin-layout.module').then(m=>m.AdminLayoutModule)

//     }
//   ]
// }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
