
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando = true;
  productosFiltrados: any[] = [];

  constructor(public http: Http) {
    this.cargarInfoJson();
   }

  cargarInfoJson() {
    let promesa = new Promise((resolve, reject) => {
      this.http.get('https://vueloaleatorio-fb7ae.firebaseio.com/productos_idx.json')
      .subscribe(data => {
          this.productos = data.json();
          this.cargando = false;
          resolve();
        });
    });
    return promesa;
  }

  cargarProducto(codigo) {
      return this.http.get('https://vueloaleatorio-fb7ae.firebaseio.com/productos/' + codigo + '.json');
  }

  buscarProductos(filtrobuscado) {

    if (this.productos.length === 0) {
      this.cargarInfoJson().then( () => {
        this.filtarProductos(filtrobuscado);
        this.cargando = false;
      });
    } else {
      this.filtarProductos(filtrobuscado);
      this.cargando = false;
    }
  }

  private filtarProductos (t) {
    this.productosFiltrados = [];
    this.productos.forEach(element => {
      if ( element.categoria.toLowerCase().indexOf(t) >= 0 ) {
         this.productosFiltrados.push(element);
       }
    });
    console.log(this.productosFiltrados);

  }
}
