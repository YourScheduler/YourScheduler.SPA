import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/Shared/Services/authorization.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  constructor(public auth:AuthorizationService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
