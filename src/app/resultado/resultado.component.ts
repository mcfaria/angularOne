import { Component, OnInit, Input } from '@angular/core';
import { ResultadoCalculoModel } from '../ResultadoCalculo';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  @Input() resultado: ResultadoCalculoModel;


  constructor() { }

  ngOnInit() {
  }

}
