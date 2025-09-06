import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <h1>Welcome to my <span class="highlight">portfolio!</span></h1>
  <p>I'm <span class="highlight">mishaeljoseph</span>, <span class="highlight">UI/UX designer</span> passionate about creating responsive and elegant websites</p>
        <a href="resume.pdf" class="btn">My Resume</a>
      </div>
      <div class="hero-photo">
  <img src="/mii.png" alt="Mishael Joseph portrait" />
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
      <h2>ABOUT <span class="highlight">ME</span></h2>
      <p>Hello! I'm mishaeljoseph, a frontend web developer and UI/UX designer currently pursuing my Bachelor's in Computer Science. I enjoy building clean, modern, and interactive websites that focus on user experience and performance.</p>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
