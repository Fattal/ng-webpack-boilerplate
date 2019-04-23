import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './components/main/main.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'index', redirectTo: '/'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    MainComponent,
    NotFoundComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
