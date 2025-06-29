import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {}
  email = localStorage.getItem("user");
  logout() {
    // Clear token or session storage
    localStorage.removeItem('authToken');

    // Redirect to login
    this.router.navigate(['/login']);
  }
}
