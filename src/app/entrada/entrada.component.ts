import { Component, OnInit } from '@angular/core';
import { EntradaModel } from '../entradaModel';
import { ResultadoCalculoModel } from '../ResultadoCalculo';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  calculado: boolean;
  model: EntradaModel;
  resultado: ResultadoCalculoModel;

  constructor() { }

  ngOnInit() {
    this.calculado = false;
    this.model = new EntradaModel();
  }

  calcular(): void {
    this.calculado = true;
    this.resultado = new ResultadoCalculoModel();
    this.resultado.id++;
    this.resultado.mensagem = 'Calculado';
    this.resultado.quantidade = this.model.quantidade;
  }

  voltar(): void {
    this.calculado = false;
    this.resultado = null;
  }
}
