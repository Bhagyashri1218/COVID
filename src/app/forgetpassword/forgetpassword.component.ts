import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  public uiInvalid = false;
  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    const data = this.fbFormGroup.value;
    if (data.password1 === data.password2) {
      this.router.navigate(['login']);
    }
    else {
      this.uiInvalid = true;
    }
  }

}
