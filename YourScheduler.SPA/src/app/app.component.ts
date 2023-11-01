import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './Shared/Services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'YourScheduler.SPA';
  isLoading = true;
  constructor(private auth: AuthorizationService){

  }
  ngOnInit(): void {
    this.isLoading = true;
    this.refreshUser();

    this.auth.user$.subscribe({
      next: _=>{
        this.isLoading = false;
      },
      error: _ =>{
        this.isLoading = false;
      }
      
    })
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
