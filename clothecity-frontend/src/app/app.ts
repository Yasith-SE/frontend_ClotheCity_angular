import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Router features okkoma meken enawa

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Meka aniwa thiyenna oone routerLink wada karanna
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'clothecity-frontend';

  // HTML eke loop ekata awashya links list eka methanayi hadanne
  pageLinks = [
    { label: 'AI Style', route: '/ai-style' },
    { label: 'Create Account', route: '/register' }
  ];
}