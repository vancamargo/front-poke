import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPokemonComponent } from './cards-pokemon.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ModalPokemonRoutingModule } from '../modal-pokemon-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgbPagination,
    RouterModule,
    ModalPokemonRoutingModule,
  ],
  declarations: [CardsPokemonComponent],
  exports: [CardsPokemonComponent],
})
export class CardsPokemonModule {}
