import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Apollo } from 'apollo-angular';
import { Observable, Subscription, map } from 'rxjs';
import { Filter_Pokemon, GET_ALL } from 'src/app/graphql/graphql.queries';
import { PokemonGql } from 'src/app/intefaces/pokemon-gql.interface';
import { Pokemon } from 'src/app/intefaces/pokemon.interface';

import { SharedService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-cards-pokemon',
  templateUrl: './cards-pokemon.component.html',
  styleUrls: ['./cards-pokemon.component.scss'],
})
export class CardsPokemonComponent implements OnInit {
  page = 1;
  pageSize = 10;

  allPokemon: Observable<PokemonGql[]>;
  searchName: string;
  coments = new FormControl('');

  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  sub: Subscription;

  constructor(
    private apollo: Apollo,

    private router: Router,
    private sharedService: SharedService
  ) {}
  pokeData: Array<Pokemon> = [];
  colectionSize: number;

  ngOnInit() {
    this.getAll();

    // this.sub = this.sharedService.data.subscribe((pokeIdCommnet) => {
    //   console.log(pokeIdCommnet, 'pokemon_v2_pokemon');
    // });

    // this.sub = this.sharedService.data.subscribe((pokeIdCommnet) => {
    //   if (!pokeIdCommnet) return;
    //   //  data;
    //   console.log(pokeIdCommnet, 'data poke');

    //   // const { pokeId, comment } = pokeIdCommnet;

    //   // this.allPokemon.subscribe((allPokemons) => {
    //   // debugger;
    //   // const pokeFounded = allPokemons.find(
    //   //   (poke) => `${poke.id}` === `${pokeId}`
    //   // );
    //   // console.log('pokeFounded', pokeFounded);
    //   // if (pokeFounded) {
    //   //   pokeFounded.description = 'xxxxxx';
    //   // }
    //   // allPokemons.forEach((poke) => {
    //   //   console.log('poke.id', poke.id);
    //   //   console.log('poke', pokeId);
    //   //   if (`${poke.id}` === `${pokeId}`) {
    //   //     console.log('achou poke', poke);
    //   //     poke.description = comment;
    //   //   }
    //   // });
    // });

    // this.pokeForm.setValue({ comment: this.commentsPokemon, name: 'sdsd' });
    // });

    // this.coments.setValue(this.comments);
    //this.teste();
  }

  // teste() {
  //   this.allPokemon.pipe(map(val:any)=>{
  //     console.log(val)
  //   })
  // }

  getAll() {
    // this.apollo
    //   .watchQuery<{ pokemon_v2_pokemon: PokemonGql }>({ query: GET_ALL })
    //   .valueChanges.subscribe((result: PokemonGql) => {
    //     this.minPrices = result.data.pokemon_v2_pokemon;
    //     console.log(this.pokeTeste, 'aqui');
    //   });
    this.allPokemon = this.apollo
      .watchQuery<{ pokemon_v2_pokemon: PokemonGql[] }>({ query: GET_ALL })
      .valueChanges.pipe(map((result) => result.data.pokemon_v2_pokemon));
    this.sizePage();
  }

  sizePage() {
    this.allPokemon.subscribe((res) =>
      console.log((this.colectionSize = res.length))
    );
  }

  //   teste(){
  //  this.allPokemon.forEach((poke) => {
  //       console.log(res, 'ddd');
  //       const pokeFiltered = {
  //         id: poke[0].id,
  //         name: poke[0].name,
  //         description: ''
  //       }

  //       if (`${pokeFiltered.id}` === `${pokeId}`) {
  //         console.log('achou poke', poke);
  //         console.log('achou poke comment', comment);

  //         pokeFiltered.description = comment;

  //         // poke.set('description', comment)
  //       }
  //       allPokemonsFiltered.push(pokeFiltered)
  //     });
  //   }

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
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
    this.sharedService.setData(this.coments.value as string);
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
