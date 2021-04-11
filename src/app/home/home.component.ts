import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public temDados: boolean = false;
  public fechar: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.ocorrencias();
  }

  ocorrencias(): void{
    this.temDados = true;
  }

  feedback(): void{
    this.fechar = true;
  }

  close(): void{
    this.fechar = !this.fechar;
  }

  confirmar(): void{
   alert('feedbéquer enviado');
  }
}
