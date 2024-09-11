import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/admin/dashboard']); // Navigate to the admin dashboard on success
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';
      this.clearInputs(); // Clear the input fields
    }
  }

  clearInputs() {
    this.username = ''; // Clear username
    this.password = ''; // Clear password
  }
}
