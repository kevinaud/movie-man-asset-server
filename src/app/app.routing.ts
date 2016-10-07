import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Route[] = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'movies', component: MoviesComponent }
];

export const routing = RouterModule.forRoot(routes);