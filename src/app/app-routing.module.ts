import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Form1Component } from './components/form1-component/form1.component';
import { Form2Component } from './components/form2-component/form2.component';
import { Form3Component } from './components/form3-component/form3.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'form1',
    component: Form1Component
  },
  {
    path: 'form2',
    component: Form2Component
  },
  {
    path: 'form3',
    component: Form3Component
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
