import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../providers/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  productosFiltro: any[] = [];

  constructor( public ar: ActivatedRoute, public _ps: ProductosService) {
    this.ar.params.subscribe(params => {

      _ps.buscarProductos(params['termino']);
    }
    );
  }
}
