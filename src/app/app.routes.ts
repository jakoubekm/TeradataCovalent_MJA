import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
// import { TemplatesComponent } from './components/templates/templates.component';
// MJA pridana sekce pro testovaci abctenplate
/* import { AbcTemplatesComponent } from './components/abctemplates/abctemplates.component';*/
import { PdcContactComponent } from './components/pdccontact/pdccontact.component';
import { PdcDownloadComponent } from './components/pdcdownload/pdcdownload.component';
import { PdcUseCasesComponent } from './components/pdcusecases/pdcusecases.component';
import { PdcArchitectureComponent } from './components/pdcarchitecture/pdcarchitecture.component';

import { SelectivePreloadingStrategyService } from './services';

const routes: Routes = [{
  component: HomeComponent,
  path: '',
}, {
  // MJA pridana sekce pro testovaci udiia
  component: PdcUseCasesComponent,
  path: 'pdcusecases',
}, {
  // MJA pridana sekce pro testovaci udiia
  component: PdcArchitectureComponent,
  path: 'pdcarchitecture',
},/* {
  //MJA pridana sekce pro testovaci udiia
  component: PdcDownloadComponent,
  path: 'pdcdownload',
},*/ {
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
