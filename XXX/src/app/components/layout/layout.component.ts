import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
