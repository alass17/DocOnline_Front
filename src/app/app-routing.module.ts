import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },
  {

    
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
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
    loadChildren: () => import('./Professionnel/inscriptionprof/inscriptionprof.module').then( m => m.InscriptionprofPageModule)
  },
  {
    path: 'prendrerdv',
    loadChildren: () => import('./prendrerdv/prendrerdv.module').then( m => m.PrendrerdvPageModule)
  },
  {
    path: 'accueil-prof',
    loadChildren: () => import('./Professionnel/accueil-prof/accueil-prof.module').then( m => m.AccueilProfPageModule)
  },
  {
    path: 'tabsmedecin',
    loadChildren: () => import('./Professionnel/tabsmedecin/tabsmedecin.module').then( m => m.TabsmedecinPageModule)
  },
  {
    path: 'rendezvousprof',
    loadChildren: () => import('./Professionnel/rendezvousprof/rendezvousprof.module').then( m => m.RendezvousprofPageModule)
  },
  {
    path: 'profilprof',
    loadChildren: () => import('./Professionnel/profilprof/profilprof.module').then( m => m.ProfilprofPageModule)
  },

  {
    path: 'modifprofilprof',
    loadChildren: () => import('./Professionnel/modifprofilprof/modifprofilprof.module').then( m => m.ModifprofilprofPageModule)
  },
  {
    path: 'detailspatients',
    loadChildren: () => import('./Professionnel/detailspatients/detailspatients.module').then( m => m.DetailspatientsPageModule)
  },
 
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'rdvdetails/:id',
    loadChildren: () => import('./rdvdetails/rdvdetails.module').then( m => m.RdvdetailsPageModule)
  },
  {
    path: 'intermediaire',
    loadChildren: () => import('./intermediaire/intermediaire.module').then( m => m.IntermediairePageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
