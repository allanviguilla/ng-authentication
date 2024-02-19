import { Component, inject } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  //inject the auth service to use Sign Out method
  auth = inject(AuthService);

  signOut() {
    this.auth.signOut();
  }
}
