import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public uiInvalid = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required, Validators.maxLength(15)],
    email: ['', Validators.required],
    mobile: ['', Validators.required, Validators.maxLength(10)],
    new_password: ['', Validators.required, Validators.minLength(3), Validators.maxLength(8)],
    con_password: ['', Validators.required],
  })

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

  async submit() {


    const data = this.fbFormGroup.value;
    const url = "http://localhost:3000/adduser";
    await this.http.post(url, data).toPromise();

    this.fbFormGroup.reset;
    await this.router.navigate(['login']);


  }

}
