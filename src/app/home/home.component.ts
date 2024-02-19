import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  //inject the auth service to use Sign Out method
  auth = inject(AuthService);

  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  userPic = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.auth.signOut();
  }
}

/* 

This line of code is retrieving and parsing a value stored in sessionStorage and assigning it to a variable named name. Here's a breakdown:

1. sessionStorage.getItem("loggedInUser")!:

This part accesses the sessionStorage API, which is a browser storage mechanism for temporary data that persists within a single browser session.
It retrieves the value associated with the key "loggedInUser".
The exclamation mark (!) after getItem is a non-null assertion. It tells the compiler to assume the value will not be null and avoids potential runtime errors if it's unexpectedly missing. However, use it cautiously as it can lead to issues if the value is actually null.
2. JSON.parse(...):

This parses the retrieved value, assuming it's a JSON string.
JSON (JavaScript Object Notation) is a common format for storing structured data in text format.
Parsing converts the JSON string into a JavaScript object, making its properties and values accessible.
3. name = ...:

Finally, the parsed object's property named "name" is extracted and assigned to the variable name.

*/
