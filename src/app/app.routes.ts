import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CreateBinComponent } from './components/create-bin/create-bin.component';
import { authguardGuard } from './AuthGuard/authguard.guard';
import { HomeComponent } from './components/home/home.component';
import { ViewsnippetComponent } from './components/viewsnippet/viewsnippet.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sigup', component: SignupComponent },
  { path: 'create', component: CreateBinComponent,canActivate:[authguardGuard] },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
      
  },
  { path: '', component:HomeComponent },
  { path: 'snippet/:id', component:ViewsnippetComponent },
  { path: '**', component: NotFoundComponent },
];
