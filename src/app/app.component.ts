import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <md-toolbar color="primary">

      <span>Movie Man</span>

      <!-- This fills the remaining space of the current row -->
      <span style="flex: 1 1 auto"></span>

      <span>
        <button md-button routerLink="/">Home</button>
        <button md-button routerLink="/movies">Movies</button>
        <button md-button routerLink="/sign-up">Sign Up</button>
        <button md-button routerLink="/login">Login</button>
      </span>

    </md-toolbar>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
