import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { TeamEndpointsService } from '../Endpoints/team-endpoints.service';
import { Team } from '../Models/team';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private auth:AuthorizationService, private teamEndpoint: TeamEndpointsService) { }

  getTeamById(teamId: number){
    let result: any;
    this.teamEndpoint.getTeamById(teamId).pipe(
      tap()
    )
    .subscribe({
      next: data =>{
        return result = data as Team;
      },
      error: er =>{
        return result = null;
      }
    });

    return result;
  }
}
