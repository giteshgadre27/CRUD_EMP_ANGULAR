import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// export class AppComponent {
//  title = 'angularCRUD'; //only this present previous
// }

export class AppComponent {
  title = 'Angular CRUD App';
  showNavAndFooter = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current URL is for the employee-list component
       // this.showNavAndFooter = event.url === '/employees';
       this.showNavAndFooter = event.url === '/employees' || event.url === '/create-employee';
      }
    });
  }

  logout() {
    localStorage.removeItem('authToken');
    sessionStorage.clear();
    
    // Redirect to login and replace history state
    this.router.navigate(['/login']).then(() => {
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, '', window.location.href);
      };
    });
  }
  
}