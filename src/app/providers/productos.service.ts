import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando = true;

  constructor(public http: Http) {
    this.cargarInfoJson();
   }

  cargarInfoJson() {
    this.http.get('https://vueloaleatorio-fb7ae.firebaseio.com/productos_idx.json').subscribe(data => {
    setTimeout(() => {
      this.productos = data.json();
      this.cargando = false;
    }, 2000);
    });
  }
}
