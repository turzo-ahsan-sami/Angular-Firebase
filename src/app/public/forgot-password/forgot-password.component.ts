import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../shared/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styles: []
})
export class ForgotPasswordComponent implements OnInit {

  constructor( public authService: AuthService ) { }

  ngOnInit() {
  }

}
