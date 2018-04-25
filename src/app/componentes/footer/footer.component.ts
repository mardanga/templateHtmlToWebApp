import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../providers/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  anio = new Date().getFullYear();
  constructor(public _is: InfoService) { }

  ngOnInit() {
  }

}
