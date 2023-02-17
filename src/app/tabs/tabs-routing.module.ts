import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'docteurs',
        loadChildren: () => import('../docteurs/docteurs.module').then( m => m.DocteursPageModule)
      },
      {
        path: 'rendezvous',
        loadChildren: () => import('../rendezvous/rendezvous.module').then( m => m.RendezvousPageModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('../maps/maps.module').then( m => m.MapsPageModule)
      }
      // ,
      // {
      //   path: '',
      //   redirectTo: '/tabs/accueil',
      //   pathMatch: 'full'
      // }
    ]
  }
  // ,
  // {
  //   path: '',
  //   redirectTo: '/tabs/accueil',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
