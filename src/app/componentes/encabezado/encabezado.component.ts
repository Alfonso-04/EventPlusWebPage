import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private router: Router) {}

    gotoHome(){
        this.router.navigate(['../../']);  // define your component where you want to go
    }

  ngOnInit(): void {
  }

}
