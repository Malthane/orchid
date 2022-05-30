import { Component, OnInit } from '@angular/core';
// import { } from '@fortawesome/free-brands-svg-icons';
// import {  } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faBars = faBars;
  faTimes = faTimes;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  Logout(){
    localStorage.removeItem('token')
    this.route.navigate([''])
  }
}
