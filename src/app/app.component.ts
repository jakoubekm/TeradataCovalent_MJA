import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Dir } from '@angular/cdk';
import { MdIconRegistry } from '@angular/material';
import { TdMediaService } from '@covalent/core';
import { TranslateService } from '@ngx-translate/core';

import { getSelectedLanguage } from './utilities/translate';
import { getDirection } from './utilities/direction';


@Component({
  selector: 'docs-covalent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class DocsAppComponent implements AfterViewInit {

  routes: Object[] = [{
      icon: 'storage',
      route: 'udiia',
      title: 'UDI Impact Analyzer',
    },{
      icon: 'settings',
      route: 'udicg',
      title: 'UDI Code Generator',
    },{
      icon: 'library_books',
      route: 'udiusecases',
      title: 'UDI Use Cases',
    },{
      icon: 'file_download',
      route: 'udidownload',
      title: 'Download',
    },{
      icon: 'contacts',
      route: 'udicontact',
      title: 'Contacts',
    },
/* {
      icon: 'library_books',
      route: 'docs',
      title: 'Documentation',
    }, {
      icon: 'picture_in_picture',
      route: 'components',
      title: 'Components & Addons',
    }, {
      icon: 'view_quilt',
      route: 'layouts',
      title: 'Layouts',
    }, {
      icon: 'color_lens',
      route: 'style-guide',
      title: 'Style Guide',
    }, {
      icon: 'view_carousel',
      route: 'templates',
      title: 'Templates',
    },{
      icon: 'view_carousel',
      route: 'abctemplates',
      title: 'AbcTemplates',
    },*/
];

  dir: string;

  constructor(private _iconRegistry: MdIconRegistry,
              private _domSanitizer: DomSanitizer,
              private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService,
              translateService: TranslateService) {
    // Set fallback language
    translateService.setDefaultLang('en');
    // Supported languages
    translateService.addLangs(['en', 'es']);

    // Get selected language and load it
    translateService.use(getSelectedLanguage(translateService));

    // Register svgs
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/teradata.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'github',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/github.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/covalent.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-stroke',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/covalent-stroke.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/covalent-outline.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'angular',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/angular.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'angular-outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/angular-outline.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'material-outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/material-outline.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/teradata-ux.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'appcenter',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/appcenter.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'listener',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/listener.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'querygrid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/querygrid.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'openwith',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/ic_open_with_white_18px.svg'));

    // set direction
    this.dir = getDirection();
  }

  ngAfterViewInit(): void {
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

}
