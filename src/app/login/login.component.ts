import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  autenticar(): void {
    console.log('teste');
  }

}
