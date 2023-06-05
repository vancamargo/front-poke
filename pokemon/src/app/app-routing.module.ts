import { CardsPokemonComponent } from './shared/components/cards-pokemon/cards-pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CardsPokemonModule } from './shared/components/cards-pokemon/cards-pokemon.module';
import { ModalPokemonComponent } from './shared/components/modal-pokemon/modal-pokemon.component';

const routes: Routes = [
  {
    path: '',

    component: MainComponent,
  },
  {
    path: 'edit/:id',
    component: ModalPokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
