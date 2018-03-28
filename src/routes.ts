import {Routes} from '@angular/router';
import {SignupFormComponent} from './app/signup-form/signup-form.component';
import {LoginFormComponent} from './app/login-form/login-form.component';
import {ChatroomComponent} from './app/chatroom/chatroom.component';
import { Component } from '@angular/core';

export const appRoutes: Routes = [
    {path: 'signup', component: SignupFormComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'chat', component: ChatroomComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
];
