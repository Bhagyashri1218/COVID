import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const sid = sessionStorage.getItem("sid");
    if (!sid) {
      this.router.navigate(['login']);
    }
  }
  aboutUs() {
    this.router.navigate(['aboutus']);
  }

  contactUs() {
    this.router.navigate(['contactus']);
  }
  logOut() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }
  goto() {
    this.router.navigate(['national']);
  }
}
