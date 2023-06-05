import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',

    component: MainComponent,
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./shared/components/modal-pokemon/modal-pokemon.module').then(
        (m) => m.ModalPokemonModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
