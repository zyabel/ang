import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin = false;
  userName: string;
  isPublic = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.checkAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.userName = auth.email;
      } else {
        this.isLogin = false;
        this.userName = '';
      }
    });

    this.router.events.subscribe( (e: Event) => {
      if (e instanceof NavigationEnd ) {
        this.isPublic = e.url.indexOf('panel') === -1;
      }
    });
  }

  logOut() {
    this.authService.logOut()
     .then(() => {
       this.router.navigate(['/login']);
     });
  }
}
