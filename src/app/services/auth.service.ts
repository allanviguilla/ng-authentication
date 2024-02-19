declare var google: any;

import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //inject router in order to go back to Login Page after Log Out
  router = inject(Router);

  constructor() {}

  signOut() {
    google.accounts.id.disableAutoSelect();
    this.router.navigate(['/']);
  }
}
