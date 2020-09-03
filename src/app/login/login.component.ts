import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public faUser = faUser;
  constructor(private router: Router) { }

  ngOnInit(): void { }

  login() {
    sessionStorage.setItem('sid', "true");
    this.router.navigate(['home']);
  }

}
