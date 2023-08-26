import { ApiService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = '';

  constructor(private ApiService: ApiService) {}

  agregar() {
    if (this.username.trim() !== '' ) {
      this.ApiService.agregar(this.username)
        .subscribe(
          response => {
            // Maneja la respuesta de la API aquí
            console.log('API response:', response);
          },
          error => {
            console.error('API error:', error);
          }
        );
    }
  }
}