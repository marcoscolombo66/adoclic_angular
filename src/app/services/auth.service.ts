import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  constructor() { }

  login(email: string, password: string): boolean {
    if (email === 'user@demo.com' && password === '123456') {
      localStorage.setItem('isLoggedIn', 'true');
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.loggedIn; 
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }
}
