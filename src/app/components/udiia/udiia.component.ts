import { Component, HostBinding, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { fadeAnimation } from '../../app.animations';

import { Observable } from 'rxjs/Observable';

import { InternalDocsService, ITemplate } from '../../services';

@Component({
  selector: 'app-udiia', //MJA co s timto - pokusil jsem se to prejmenovat?
  styleUrls: ['./udiia.component.scss'],
  templateUrl: './udiia.component.html',
  animations: [fadeAnimation],
})
export class UdiIaComponent implements AfterViewInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

 udiiaObs: Observable<ITemplate[]>;

  constructor(public media: TdMediaService,
              private _changeDetectorRef: ChangeDetectorRef,
              private _internalDocsService: InternalDocsService) {
    this.udiiaObs = this._internalDocsService.queryTemplates();
  }

  ngAfterViewInit(): void {
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }
}
