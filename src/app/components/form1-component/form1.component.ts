import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  dataForm: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  submit(): void {
    this.http
      .post('https://postman-echo.com/post', {
        name: this.dataForm.value.name,
        email: this.dataForm.value.email,
        address: this.dataForm.value.address,
        phone: this.dataForm.value.phone
      })
      .subscribe(res => console.log('res', res));
  }

  redirectToHome() {
    this.router.navigate(['home']);
  }
}
