import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Team } from '../Models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamEndpointsService {

  constructor(private http: HttpClient) { }

  public getTeamById(teamId: number){
    return this.http.get<Team>(`${environment.appUrl}Team/getById/${teamId}`);
  }
}
