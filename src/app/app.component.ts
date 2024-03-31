import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebaseconfig';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'codebinapp';
  constructor(){
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
  }
}
