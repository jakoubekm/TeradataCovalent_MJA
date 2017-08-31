import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
//import { TemplatesComponent } from './components/templates/templates.component';
//MJA pridana sekce pro testovaci abctenplate
/*import { AbcTemplatesComponent } from './components/abctemplates/abctemplates.component';*/
import { UdiCgComponent } from './components/udicg/udicg.component';
import { UdiIaComponent } from './components/udiia/udiia.component';
import { PdcContactComponent } from './components/pdccontact/pdccontact.component';
import { UdiDownloadComponent } from './components/udidownload/udidownload.component';
import { UdiUseCasesComponent } from './components/udiusecases/udiusecases.component';

import { SelectivePreloadingStrategyService } from './services';


const routes: Routes = [{
  component: HomeComponent,
  path: '',
},{
  //MJA pridana sekce pro testovaci udicg
  component: UdiCgComponent,
  path: 'udicg',
}, {
  //MJA pridana sekce pro testovaci udiia
  component: UdiIaComponent,
  path: 'udiia',
},{
  //MJA pridana sekce pro testovaci udiia
  component: UdiUseCasesComponent,
  path: 'udiusecases',
}, {
  //MJA pridana sekce pro testovaci udiia
  component: UdiDownloadComponent,
  path: 'udidownload',
}, {
  //MJA pridana sekce pro testovaci udiia
  component: PdcContactComponent ,
  path: 'pdccontact',
},{
  path: '**', redirectTo: '/',
},

/* {
  component: TemplatesComponent,
  path: 'templates',
}, {
  //MJA pridana sekce pro testovaci abctenplate
  component: AbcTemplatesComponent,
  path: 'abctemplates',
}, */
/*{
  // preload: true loads the module immediately
  path: '', data: { preload: false, }, loadChildren: './components/docs/docs.module#DocsModule',
}, {
  // preload: true loads the module immediately
  path: '', data: { preload: false, }, loadChildren: './components/style-guide/style-guide.module#StyleGuideModule',
}, {
  // preload: true loads the module immediately
  path: '', data: { preload: false, }, loadChildren: './components/layouts/layouts.module#LayoutsModule',
},{
  // preload: true loads the module immediately
  path: '', data: { preload: true, }, loadChildren: './components/components/components.module#ComponentsModule',
},*/ 
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
  preloadingStrategy: SelectivePreloadingStrategyService,
});
