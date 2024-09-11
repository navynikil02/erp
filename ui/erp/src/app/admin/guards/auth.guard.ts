import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const loggedIn = this.authService.isLoggedIn();
    
    if (loggedIn) {
      return true; // Allow access
    } else {
      window.alert('Session expired, redirecting to login...');
      this.router.navigate(['/admin/login']); // Redirect to login if not logged in
      return false;
    }
  }
}

