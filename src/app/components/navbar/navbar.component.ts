import { Component, OnInit } from '@angular/core';
import {
  faInstagram,
  faLinkedin,
  faMedium,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faMedium = faMedium;
  faHome = faHome;

  constructor() {}

  ngOnInit(): void {}
}
