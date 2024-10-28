import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = false; // Simulando que el usuario no está autenticado
    if (isAuthenticated) { 
      return true; // Permitir acceso si está autenticado
    } else {
      this.router.navigate(['/login']); 
      return false; // Bloquear acceso si no está autenticado
    }
}

}
