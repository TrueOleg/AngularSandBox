import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
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
      company: ['', [Validators.required]],
      title: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  submit() {
    this.http.post('https://postman-echo.com/post', {
      name: this.dataForm.value.name,
      email: this.dataForm.value.email,
      company: this.dataForm.value.company,
      title: this.dataForm.value.title,
      number: this.dataForm.value.number
    });
  }

  redirectToHome() {
    this.router.navigate(['home']);
  }
}
