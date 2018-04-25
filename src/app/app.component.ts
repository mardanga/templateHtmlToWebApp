import { Component } from '@angular/core';
import { InfoService } from './providers/info.service';
import { ProductosService } from './providers/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _is: InfoService) {}

}
