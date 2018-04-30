import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../providers/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styles: []
})
export class PortfolioItemComponent  {
  cod: string;
  producto: any;
  constructor( public _ps: ProductosService, public ar: ActivatedRoute) {
    this.ar.params.subscribe(
      parametros => {
        _ps.cargarProducto(parametros['prod']).subscribe(
          p =>  {this.producto =  p.json();
            this.cod = parametros['prod'];
            // console.log(this.producto);
          }
        );
      }
    );
  }
}
