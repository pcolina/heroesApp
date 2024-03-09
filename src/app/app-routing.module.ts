import { PipesModule } from './pages/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicoComponent } from './pages/basico/basico.component';
import { HijoComponent } from './pages/hijo/hijo.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [



  {
    path: 'basico', component: BasicoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pipes', component: PipesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'heroes', loadChildren: () => import('./pages/heroes/heroes.module').then(m => m.HeroesModule),
    canActivate: [AuthGuard]
  },
  { path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
