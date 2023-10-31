import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './Shared/Services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'YourScheduler.SPA';
  constructor(private auth: AuthorizationService){

  }
  ngOnInit(): void {
    this.refreshUser();
  }
  private refreshUser(){
    const jwt = this.auth.getTokenFromLocalStorage();
    
    if(jwt){
      this.auth.refreshUser(jwt);
    } else {
      this.auth.refreshUser(null);
    }
  }
  
}
