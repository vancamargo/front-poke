import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPokemonComponent } from './cards-pokemon.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ModalPokemonRoutingModule } from '../modal-pokemon-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbPagination,
    RouterModule,
    ModalPokemonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CardsPokemonComponent],
  exports: [CardsPokemonComponent],
})
export class CardsPokemonModule {}
