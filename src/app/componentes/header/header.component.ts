import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../providers/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(public _is: InfoService, public router: Router) { }

  ngOnInit() {
  }

  buscar(termino) {
    this.router.navigate(['buscar', termino]);
  }
}
