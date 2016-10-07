import { Component } from '@angular/core';

import { Movie } from './movie';

@Component({
  selector: 'movies',
  templateUrl: 'movies.html',
  styleUrls: [ 'movies.css' ]
})
export class MoviesComponent {
  
  movies: Movie[] = [
    {
      title: "Star Wars: The Force Awakens",
      released: "2015",
      description: "Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance."
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      released: "2003",
      description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
    },
    {
      title: "Animal House",
      released: "1978",
      description: "At a 1962 college, Dean Vernon Wormer is determined to expel the entire Delta Tau Chi Fraternity, but those trouble-makers have other plans for him."
    },
  ];

}