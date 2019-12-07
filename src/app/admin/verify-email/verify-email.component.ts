import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./../../shared/auth.service";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styles: []
})
export class VerifyEmailComponent implements OnInit {

  constructor( public authService: AuthService ) { }

  ngOnInit() {
  }

}
