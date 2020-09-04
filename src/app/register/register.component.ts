import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public uiInvalid = false;
  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required],
  })
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    this.router.navigate(['login']);
  }

}
