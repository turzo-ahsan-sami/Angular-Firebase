import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/auth.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
