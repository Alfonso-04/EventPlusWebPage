import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-contacto',
  templateUrl: './tabla-contacto.component.html',
  styleUrls: ['./tabla-contacto.component.css']
})
export class TablaContactoComponent implements OnInit {

  @Input() datosUser: any
  constructor() { }

  ngOnInit(): void {
  }

}
