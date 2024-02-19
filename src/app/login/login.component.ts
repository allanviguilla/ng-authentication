//import google
declare var google: any;
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
//add lifecycle hook OnInit to LoginComponent
export class LoginComponent implements OnInit {
  //add lifecycle hook and initialize google client id
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '',
      callback: (res: any) => {},
    });

    //attach google login button to DOM through css id
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350,
    });
  }
}
