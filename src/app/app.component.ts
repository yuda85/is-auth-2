import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ResolveStart,
  Router,
} from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  token: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);

        console.log(this.route.snapshot.queryParams['token']);
        this.token = this.route.snapshot.queryParams['token'] || '';

        this.authService.isAuth(this.token);
      }
    });

    debugger;
    this.token = this.route.snapshot.queryParams['snapshot'];
  }
}
