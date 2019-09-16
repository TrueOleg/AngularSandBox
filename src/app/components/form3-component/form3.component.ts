import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface SelectOptions {
  value: string;
}

@Component({
  selector: 'form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {
  dataForm: FormGroup;

  categories: SelectOptions[] = [
    { value: 'Incident' },
    { value: 'Issue' },
    { value: 'Change' }
  ];

  priorities: SelectOptions[] = [
    { value: 'Low' },
    { value: 'Medium' },
    { value: 'High' }
  ];

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      category: ['', [Validators.required]],
      details: ['', [Validators.required]],
      priority: ['', [Validators.required]]
    });
  }

  submit() {
    this.http.post('https://postman-echo.com/post', {
      name: this.dataForm.value.name,
      email: this.dataForm.value.email,
      category: this.dataForm.value.category,
      details: this.dataForm.value.details,
      priority: this.dataForm.value.priority
    });
  }

  redirectToHome() {
    this.router.navigate(['home']);
  }
}
