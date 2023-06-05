/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsPokemonComponent } from './cards-pokemon.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { ModalPokemonRoutingModule } from '../modal-pokemon-routing.module';
import { ApolloModule } from 'apollo-angular';

import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from 'src/app/graphql.module';

describe('CardsPokemonComponent', () => {
  let component: CardsPokemonComponent;
  let fixture: ComponentFixture<CardsPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardsPokemonComponent],
      imports: [
        CommonModule,
        NgbPagination,
        RouterModule,
        ModalPokemonRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ApolloModule,
        GraphQLModule,
      ],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call getAll() and update allPokemon on getAll()', () => {

  // });
});
