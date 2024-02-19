//import google
declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
//add lifecycle hook OnInit to LoginComponent
export class LoginComponent implements OnInit {
  private router = inject(Router);

  //add lifecycle hook and initialize google client id
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '1092669522910-maeq740kc31h6ro0ii9qi73hnj7j1k8o.apps.googleusercontent.com',
      callback: (res: any) => {
        this.handleLogin(res);
      },
    });

    //attach google login button to DOM through css id
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350,
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response: any) {
    //decode the token
    const payload = this.decodeToken(response.credential);

    //store in session
    sessionStorage.setItem('loggedInUser', JSON.stringify(payload));

    //navigate to home
    this.router.navigate(['home']);
  }
}
