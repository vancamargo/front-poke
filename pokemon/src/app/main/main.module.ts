import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main.component';
import { CardsPokemonModule } from '../shared/components/cards-pokemon/modal-pokemon/cards-pokemon.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, NgbAlertModule, NgbPagination, CardsPokemonModule],
  exports: [MainComponent],
})
export class MainModule {}
