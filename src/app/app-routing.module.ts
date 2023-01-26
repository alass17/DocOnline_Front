import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },
  {

    
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  
  {
    path: 'docteurs',
    loadChildren: () => import('./docteurs/docteurs.module').then( m => m.DocteursPageModule)
  },
  {
    path: 'rendezvous',
    loadChildren: () => import('./rendezvous/rendezvous.module').then( m => m.RendezvousPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'detailsdocteurs/:id',
    loadChildren: () => import('./detailsdocteurs/detailsdocteurs.module').then( m => m.DetailsdocteursPageModule)
  },
  {
    path: 'monprofil',
    loadChildren: () => import('./monprofil/monprofil.module').then( m => m.MonprofilPageModule)
  },
  {
    path: 'profilmodif',
    loadChildren: () => import('./profilmodif/profilmodif.module').then( m => m.ProfilmodifPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'inscriptionprof',
    loadChildren: () => import('./inscriptionprof/inscriptionprof.module').then( m => m.InscriptionprofPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
