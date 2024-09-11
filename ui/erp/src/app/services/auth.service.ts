import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private SESSION_TIMEOUT = 2 * 60 * 1000; // 30 minutes session timeout

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      const now = new Date().getTime();
      const expiresAt = now + this.SESSION_TIMEOUT;
      localStorage.setItem('auth_token', 'dummy-token');
      localStorage.setItem('expires_at', JSON.stringify(expiresAt));
      return true;
    }
    window.alert('Login failed');
    return false;
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('auth_token');
    const expiresAt = localStorage.getItem('expires_at');
    if (token && expiresAt) {
      const now = new Date().getTime();
      if (now < JSON.parse(expiresAt)) {
        return true; // Session is still valid
      } else {
        this.logout(); // Session expired, log out
        return false;
      }
    }
    return false; // No token found
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/admin/login']);
  }

  // Extend session on user interaction (optional)
  extendSession(): void {
    const token = localStorage.getItem('auth_token');
    if (token) {
      const now = new Date().getTime();
      const expiresAt = now + this.SESSION_TIMEOUT;
      localStorage.setItem('expires_at', JSON.stringify(expiresAt));
    }
  }
}