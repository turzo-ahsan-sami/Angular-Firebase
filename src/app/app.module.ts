import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { TodoComponent } from './components/todo/todo.component';

import { TodoService } from './shared/todo.service';
import { AuthService } from './shared/auth.service';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
