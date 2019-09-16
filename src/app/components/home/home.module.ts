import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Form1Component } from '../form1-component/form1.component';
import { Form3Component } from '../form3-component/form3.component';
import { Form2Component } from '../form2-component/form2.component';

@NgModule({
  declarations: [HomeComponent, Form1Component, Form2Component, Form3Component],
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule {}
