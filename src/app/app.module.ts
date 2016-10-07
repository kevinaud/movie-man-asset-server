import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';

import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';

import { routing } from './app.routing';

import { ShortenPipe } from './shared/shorten.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MoviesComponent } from './movies/movies.component.ts';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent, 
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    MoviesComponent,
    ShortenPipe
  ],
  imports: [
    MdCoreModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    UniversalModule,
    FormsModule,
    routing
  ]
})
export class MainModule {

}
