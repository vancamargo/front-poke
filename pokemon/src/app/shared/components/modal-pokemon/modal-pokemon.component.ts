import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ActivatedRoute,
  ParamMap,
  Params,
  Router,
  RouterEvent,
} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Apollo } from 'apollo-angular';
import { Subject, takeUntil } from 'rxjs';
import { GET_Search } from 'src/app/graphql/graphql.queries';
import { PokemonGql } from 'src/app/interfaces/pokemon-gql.interface';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.scss'],
})
export class ModalPokemonComponent implements OnInit {
  destroy = new Subject<any>();

  pokeForm!: FormGroup;
  idPokemon: number;

  constructor(
    private pokeService: PokemonServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo
  ) {}

  ngOnInit() {
    this.route.params.subscribe((queryParams: Params) => {
      this.idPokemon = queryParams['id'];
      this.getById(this.idPokemon);
      //console.log(this.idPokemon);
      // this.getPokemon(this.idPokemon, 'id');
    });
    this.getPokeFormPoke();
  }

  getPokeFormPoke() {
    this.pokeForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  getById(id: number) {
    console.log(id);
    debugger;
    this.apollo
      .watchQuery<any>({
        query: GET_Search,
        variables: {
          pokeId: id,
        },
      })
      .valueChanges.subscribe(({ data }) => {
        debugger;
        console.log(data, 'pokemon_v2_pokemon');
        // var fruritById = data.allFruits[0];
        // this.fruitForm = {
        //   id: fruritById.id,
        //   name: fruritById.name,
        //   price: fruritById.price,
        //   quantity: fruritById.quantity,
        // };
      });
  }

  getPokemon(id: number) {
    this.pokeService.getPokemonById(id).subscribe({
      next: (resPokemon) => {
        this.pokeForm.controls['name'].setValue(resPokemon.name);
        this.pokeForm.controls['description'].setValue(resPokemon.name);
      },
      error: (err) => {},
    });
  }

  addPokemon() {
    debugger;
    if (this.idPokemon) {
      this.pokeService
        .putPokemon(this.pokeForm.value, this.idPokemon)
        .subscribe({
          next: (res) => {},
          error: (err) => {},
        });
    } else {
      this.pokeService.postPokemon(this.pokeForm.value).subscribe({
        next: (res) => {},
        error: (err) => {},
      });
    }
  }

  back() {
    this.router.navigateByUrl(``);
  }
}
