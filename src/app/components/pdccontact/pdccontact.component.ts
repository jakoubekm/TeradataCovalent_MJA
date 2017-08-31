import { Component, HostBinding, AfterViewInit } from '@angular/core';
import { GitHubService } from '../../services';

import { fadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-templates',
  styleUrls: ['./pdccontact.component.scss'],
  templateUrl: './pdccontact.component.html',
  animations: [fadeAnimation],
})

export class PdcContactComponent implements AfterViewInit {
  
    @HostBinding('@routeAnimation') routeAnimation: boolean = true;
    @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  
      starCount: number = 0;
    
   constructor(private _gitHubService: GitHubService) {
  }
   
   ngAfterViewInit(): void {
    this._gitHubService.queryStartCount().subscribe((starsCount: number) => {
      this.starCount = starsCount;
    });
  }
}
