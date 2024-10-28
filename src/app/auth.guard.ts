import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service'; // Asegúrate de importar tu servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) { // Implementa la lógica de autenticación
      return true;
    } else {
      this.router.navigate(['/login']); // Redirige a login si no está autenticado
      return false;
    }
  }
}
