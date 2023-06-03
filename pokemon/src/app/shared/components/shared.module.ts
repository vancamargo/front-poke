import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalPokemonComponent } from './modal-pokemon/modal-pokemon.component';

@NgModule({
  declarations: [ModalPokemonComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],

  exports: [CommonModule],
})
export class SharedModule {}
