import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public faUser = faUser;
  public uiInvalid = false;
  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void { }

  login() {


    const data = this.fbFormGroup.value;

    if (data.username === 'angular' && data.password == 'js2') {
      sessionStorage.setItem('sid', "true");
      this.router.navigate(['home']);
    }
    else {
      this.uiInvalid = true;
    }
  }

}
