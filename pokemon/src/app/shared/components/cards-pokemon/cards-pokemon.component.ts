import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Apollo } from 'apollo-angular';
import { Observable, Subject, map, of } from 'rxjs';
import { Filter_Pokemon, GET_ALL } from 'src/app/graphql/graphql.queries';
import { PokemonGql } from 'src/app/intefaces/pokemon-gql.interface';
import { Pokemon } from 'src/app/intefaces/pokemon.interface';

import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { SharedService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'cards-pokemon',
  templateUrl: './cards-pokemon.component.html',
  styleUrls: ['./cards-pokemon.component.scss'],
})
export class CardsPokemonComponent implements OnInit {
  page = 1;
  pageSize = 20;

  collectionSize: any;

  allPokemon: Observable<PokemonGql[]> = of([]);
  searchName: string = '';
  addComentsPokemon: string = '';
  coments = new FormControl('');
  allPokemon2: any[] = [];
  private subject = new Subject<any>();
  languages = ['Java', 'Python', 'JavaScript', 'Go'];

  constructor(
    private apollo: Apollo,

    private router: Router,
    private sharedService: SharedService
  ) {}
  pokeData: Array<Pokemon> = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.allPokemon = this.apollo
      .watchQuery<{ pokemon_v2_pokemon: PokemonGql[] }>({ query: GET_ALL })
      .valueChanges.pipe(map((result) => result.data.pokemon_v2_pokemon));
  }

  search() {
    console.log(this.searchName);
    this.allPokemon = this.apollo
      .watchQuery<{ pokemon_v2_pokemon: PokemonGql[] }>({
        query: Filter_Pokemon,
        variables: {
          pokeName: this.searchName,
        },
      })
      .valueChanges.pipe(map((result) => result.data.pokemon_v2_pokemon));
  }

  edit(id: number) {
    this.router.navigateByUrl(`edit/${id}`);
  }

  // sendData(string:) {
  //   console.log(this.coments.value);

  // }

  addComment() {
    console.log(this.coments.value);
    this.sharedService.setData(this.coments.value);
  }

  // addComents(id: number) {
  //   this.allPokemon.subscribe((result) => {
  //     console.log(this.coments.value, id);
  //     const itemFounded = result.find((item) => item.id === id);
  //     console.log(itemFounded);
  //     if (itemFounded) {
  //       itemFounded.description = this.coments.value as string;
  //     }
  //     console.log(itemFounded, 'itemFounded');
  //   });

  //   // console.log('item founded ssss', itemFounded);
  //   // if (!this.coments.value) {
  //   //   return;
  //   // }

  //   // this.allPokemon$ = this.userService.getUsers().pipe(
  //   //   map(users => users.map(this.getOrdersForUser)),
  //   //   switchMap(userWithOrders$ => forkJoin(...userWithOrders$))
  //   // );

  //   // this.apollo
  //   //   .watchQuery({ query: GET_ALL })
  //   //   .valueChanges.subscribe((result: any) => {
  //   //     this.pokeData = result.data.pokemon_v2_pokemon;
  //   //     this.collectionSize = this.pokeData.length;

  //   //     const itemFounded = this.pokeData.find((item) => item.id === id);
  //   //     console.log('item founded ssss', itemFounded);

  //   //     if (itemFounded) {
  //   //       // const withComment = Object.assign(itemFounded, {
  //   //       //   description: this.coments.value as string,
  //   //       // });
  //   //       itemFounded.description = 'dxxxxx';
  //   //       // Object.preventExtensions(itemFounded);

  //   //       // Object.defineProperty(itemFounded, 'descrition', {
  //   //       //   string: this.coments.value,
  //   //       // });
  //   //     }

  //   //     //  console.log(result.data.gen3_species.pokemon_v2_pokemon);

  //   //     console.log(result);
  //   //   });
  // }
}
