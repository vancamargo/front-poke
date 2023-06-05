/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalPokemonComponent } from './modal-pokemon.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloModule } from 'apollo-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalPokemonRoutingModule } from '../modal-pokemon-routing.module';

describe('ModalPokemonComponent', () => {
  let component: ModalPokemonComponent;
  let fixture: ComponentFixture<ModalPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPokemonComponent],
      imports: [
        RouterTestingModule,
        ApolloModule,
        FormsModule,
        ReactiveFormsModule,
        ModalPokemonRoutingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
