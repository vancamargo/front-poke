import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable, Subscription, map } from 'rxjs';
import { Filter_Pokemon, GET_ALL } from 'src/app/graphql/graphql.queries';
import { Pokemon } from 'src/app/intefaces/pokemon.interface';
import { SharedService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-cards-pokemon',
  templateUrl: './cards-pokemon.component.html',
  styleUrls: ['./cards-pokemon.component.scss'],
})
export class CardsPokemonComponent implements OnInit, OnDestroy {
  page = 1;
  pageSize = 10;
  allPokemon: Observable<Pokemon[]>;
  searchName: string;
  coments = new FormControl('');
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  subLength: Subscription;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private sharedService: SharedService
  ) {}

  colectionSize: number;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.allPokemon = this.apollo
      .watchQuery<{ pokemon_v2_pokemon: Pokemon[] }>({ query: GET_ALL })
      .valueChanges.pipe(map((result) => result.data.pokemon_v2_pokemon));
    this.sizePage();
  }

  sizePage() {
    this.subLength = this.allPokemon.subscribe(
      (res) => (this.colectionSize = res.length)
    );
  }

  search() {
    console.log(this.searchName);
    this.allPokemon = this.apollo
      .watchQuery<{ pokemon_v2_pokemon: Pokemon[] }>({
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
    this.sharedService.setData(this.coments.value);
  }

  ngOnDestroy() {
    if (this.subLength) {
      this.subLength.unsubscribe();
    }
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
