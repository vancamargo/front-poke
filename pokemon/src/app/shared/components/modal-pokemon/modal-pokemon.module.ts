import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPokemonComponent } from './modal-pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalPokemonRoutingModule } from '../modal-pokemon-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalPokemonRoutingModule,
  ],
  declarations: [ModalPokemonComponent],
  exports: [ModalPokemonComponent],
})
export class ModalPokemonModule {}
