import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly emailBase: string = "admin@admin.com";
  private readonly senhaBase: string = "admin";

  @ViewChild ('email') emailInput: ElementRef;
  @ViewChild ('senha') senhaInput: ElementRef;


  public formLogin: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    senha: new FormControl(null, Validators.required),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  autenticar(): void {

    if (this.formLogin.invalid){
      alert("Email ou Senha inválido");

      // validação para email
      // if (this.formLogin.errors == Validators.email){

      // }

    }
    else {
      if (this.emailInput.nativeElement.value === this.emailBase && this.senhaInput.nativeElement.value === this.senhaBase){
        // alert("Login efetuado com sucesso!");
        this.router.navigate(['/home']);

      }
      else {
        alert("Email ou Senha inválido");
      }
    }
  }
}
