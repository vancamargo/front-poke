import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main.component';
import { CardsPokemonModule } from '../shared/components/cards-pokemon/cards-pokemon.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    NgbAlertModule,
    NgbPagination,
    CardsPokemonModule,
    RouterModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
