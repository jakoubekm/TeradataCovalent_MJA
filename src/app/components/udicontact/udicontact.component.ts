import { Component, HostBinding, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { fadeAnimation } from '../../app.animations';

import { Observable } from 'rxjs/Observable';

import { InternalDocsService, ITemplate } from '../../services';

@Component({
  selector: 'app-templates',
  styleUrls: ['./udicontact.component.scss'],
  templateUrl: './udicontact.component.html',
  animations: [fadeAnimation],
})

export class UdiContactComponent implements AfterViewInit {
  
    @HostBinding('@routeAnimation') routeAnimation: boolean = true;
    @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  
    templatesObs: Observable<ITemplate[]>;
    
      constructor(public media: TdMediaService,
                  private _changeDetectorRef: ChangeDetectorRef,
                  private _internalDocsService: InternalDocsService) {
        this.templatesObs = this._internalDocsService.queryTemplates();
      }
    
      ngAfterViewInit(): void {
        this.media.broadcast();
        this._changeDetectorRef.detectChanges();
      }
  }
  