import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Team } from 'src/app/Shared/Models/team';
import { AuthorizationService } from 'src/app/Shared/Services/authorization.service';
import { TeamService } from 'src/app/Shared/Services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit, OnDestroy {
  showSmallMenu = false;
  @Input() teamId:number = 0;
  team?: Team | null;
  destroyed$ = new Subject();
  constructor(public auth: AuthorizationService, private teamService: TeamService){

  }
  ngOnDestroy(): void {
    this.destroyed$.complete();
  }
  ngOnInit(): void {
    if(this.teamId != 0){
      let teamLet = this.teamService.getTeamById(this.teamId);

      if(teamLet)
        this.team = teamLet as Team;
    }
  }

}
