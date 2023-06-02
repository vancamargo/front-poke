import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPokemonComponent } from './cards-pokemon.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { ListFilterPipe } from 'src/app/pipes/filter.pipe';

@NgModule({
  imports: [CommonModule, NgbPagination],
  declarations: [CardsPokemonComponent, ListFilterPipe],
  exports: [CardsPokemonComponent],
})
export class CardsPokemonModule {}
