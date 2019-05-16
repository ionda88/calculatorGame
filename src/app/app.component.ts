import { Component, OnInit } from '@angular/core';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  resultado: number;
  valorInicial: number;
  jogadas: number;
  objetivo: number;
  mensagem: string = null;
  jogando: boolean = true;
  nivel:number = 1;
  perdeu:boolean = false;
  constructor() { }

  ngOnInit() {
    this.inicio();
  }

  private inicio() {

    if(this.nivel == 1){
    this.objetivo = 2;
    this.valorInicial = 0;
    this.jogadas = 2;
    }else if(this.nivel == 2){
    this.objetivo = 8;
    this.valorInicial = 0;
    this.jogadas = 3;
    }else if(this.nivel == 3){
      this.objetivo = 12;
      this.valorInicial = 0;
      this.jogadas = 3;
    }else if(this.nivel == 4){
      this.objetivo = 7;
      this.valorInicial = 1;
      this.jogadas = 3;
    }else if(this.nivel == 5){
      this.objetivo = 4;
      this.valorInicial = 3;
      this.jogadas = 3;
    }
    this.resultado = this.valorInicial;
    this.mensagem = null;
    this.jogando = true;
    this.perdeu = false;
  }

  private calcular(operador: string, valor: number) {
    if (this.jogadas > 0) {
      this.jogadas = this.jogadas - 1;
      if (operador == "+") {
        this.resultado = this.resultado + valor;
      } else if (operador == "-") {
        this.resultado = this.resultado - valor;
      } else if (operador == "*") {
        this.resultado = this.resultado * valor;
      } else if (operador == "^") {
        this.resultado = this.resultado ^ valor;
      } else if (operador == "/") {
        this.resultado = this.resultado / valor;
      } else if (operador == "raiz") {
        this.resultado = Math.sqrt(this.resultado);
      }
    }
      if (this.jogadas == 0) {
        if (this.resultado == this.objetivo) {
          this.jogando = false;
          this.mensagem = "Vitória!";
        } else {
          this.perdeu = true;
        }
      }

  }

  private limpaVisor() {
    this.inicio()
  }

  private OK(){
    this.nivel = this.nivel + 1;
    this.inicio();

  }
}
