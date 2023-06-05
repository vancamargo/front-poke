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
    this.sharedService.setData(this.coments.value as string);
  }

  ngOnDestroy() {
    if (this.subLength) {
      this.subLength.unsubscribe();
    }
  }
}
