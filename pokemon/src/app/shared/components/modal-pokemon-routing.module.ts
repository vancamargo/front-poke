import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalPokemonComponent } from './modal-pokemon/modal-pokemon.component';

const routes: Routes = [{ path: 'add', component: ModalPokemonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPokemonRoutingModule {}
