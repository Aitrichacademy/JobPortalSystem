import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  

  {path:'',loadChildren:()=> import ('./auth/auth.module').then(m => m.AuthModule)},
  {path:'provider',canActivate: [AuthGuard],loadChildren:()=> import ('./Provider/routes/provider.module').then(m => m.ProviderModule)},
  { path: '**', component: NotFoundComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
