import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoService {

  info: any = {};
  equipo: any[] = [];

  constructor(public http: Http) {
    this.cargarInfoJson();
    this.cargarInfoAbout();
  }

  cargarInfoJson() {
    this.http.get('assets/data/variable.info.json').subscribe(data => {
      this.info = data.json();
    });
  }

  cargarInfoAbout() {
    this.http.get('https://vueloaleatorio-fb7ae.firebaseio.com/equipo.json').subscribe(data => {
      this.equipo = data.json();
      //console.log(this.equipo);
    });
  }
}
