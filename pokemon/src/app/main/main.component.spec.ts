/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { ApolloModule } from 'apollo-angular';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbAlertModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { CardsPokemonModule } from '../shared/components/cards-pokemon/cards-pokemon.module';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from '../graphql.module';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [
        CommonModule,
        NgbAlertModule,
        NgbPagination,
        CardsPokemonModule,
        RouterModule,
        ApolloModule,
        HttpClientModule,
        GraphQLModule,
      ],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
