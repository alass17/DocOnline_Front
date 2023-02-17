import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsmedecinPage } from './tabsmedecin.page';

const routes: Routes = [
  {
    path: '',
    component: TabsmedecinPage,
    children: [
      
      {
        path: 'accueil-prof',
        loadChildren: () => import('../accueil-prof/accueil-prof.module').then( m => m.AccueilProfPageModule)
      },
      {
        path: 'rendezvousprof',
        loadChildren: () => import('../rendezvousprof/rendezvousprof.module').then( m => m.RendezvousprofPageModule)
      },
      {
        path: 'profilprof',
        loadChildren: () => import('../profilprof/profilprof.module').then( m => m.ProfilprofPageModule)
      },
      {
        path: 'patients',
        loadChildren: () => import('../patients/patients.module').then( m => m.PatientsPageModule)
      }
      // ,
      // {
      //   path: '',
      //   redirectTo: '/tabsmedecin/accueil-prof',
      //   pathMatch: 'full'
      // }
    ]
  }
  // ,
  // {
  //   path: '',
  //   redirectTo: '/tabsmedecin/accueil-prof',
  //   pathMatch: 'full'
  // }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsmedecinPageRoutingModule {}
