import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const loggedIn = this.authService.isLoggedIn();
    
    if (loggedIn) {
      this.router.navigate(['/admin/dashboard'], { replaceUrl: true }); // Redirect to admin if logged in
      return false;
    } else {
      return true; // Allow access to login page if not logged in
    }
  }
}
