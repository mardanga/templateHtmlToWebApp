import { InfoService } from './../../providers/info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
 
})
export class AboutComponent implements OnInit {

  constructor(public _is: InfoService) { }

  ngOnInit() {
  }

}
