import { ModalPokemonModule } from './shared/components/modal-pokemon/modal-pokemon.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ModalPokemonComponent } from './shared/components/modal-pokemon/modal-pokemon.component';

const routes: Routes = [
  {
    path: '',

    component: MainComponent,
  },
  { path: 'edit/:id', component: ModalPokemonComponent },
  // {
  //   path: 'edit',
  //   loadChildren: () =>
  //     import('./shared/components/modal-pokemon-routing.module').then(
  //       (m) => m.ModalPokemonRoutingModule
  //     ),
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  // },
  // {
  //   path: 'edit/:id',
  //   loadChildren: () =>
  //     import('./shared/components/modal-pokemon/modal-pokemon.module').then(
  //       (x) => x.ModalPokemonModule
  //     ),
  // },
  // {
  //   path: 'edit/:id',
  //   loadChildren: () =>
  //     import('./shared/components/shared.module').then((m) => m.SharedModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
