import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
  <div class="brand">&lt;mishaeljoseph /&gt;</div>
      <ul class="nav-links">
        <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a></li>
        <li><a routerLink="/about" routerLinkActive="active">About</a></li>
        <li><a routerLink="/skills" routerLinkActive="active">Skills</a></li>
        <li><a routerLink="/education" routerLinkActive="active">Education</a></li>
        <li><a routerLink="/projects" routerLinkActive="active">Projects</a></li>
        <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      position: sticky;
      top: 0;
      width: 100%;
      background: #000;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
  padding: 1rem 2rem 1rem 1rem; /* moved slightly left */
      z-index: 100;
      border-bottom: 2px solid #00ff9c;
    }
    .brand {
      font-weight: bold;
      font-size: 1.5rem;
      color: #00ff9c;
    }
    .nav-links {
      list-style: none;
      display: flex;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }
    .nav-links a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;
      transition: border-color 0.2s, color 0.2s;
    }
    .nav-links a.active, .nav-links a:hover {
      color: #00ff9c;
      border-bottom: 2px solid #00ff9c;
    }
  `]
})
export class NavbarComponent {}
