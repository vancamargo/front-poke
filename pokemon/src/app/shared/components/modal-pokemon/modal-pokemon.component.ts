import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { Subject, Subscription, map, takeUntil } from 'rxjs';
import { GET_Search } from 'src/app/graphql/graphql.queries';
import { PokemonGql } from 'src/app/intefaces/pokemon-gql.interface';

import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { CardsPokemonComponent } from '../cards-pokemon/cards-pokemon.component';
import { SharedService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.scss'],
})
export class ModalPokemonComponent implements OnInit, OnDestroy {
  destroy = new Subject<null>();
  paramsSubscription: Subscription;

  pokeForm!: FormGroup;
  idPokemon: number;

  commentsPokemon: string;
  pokeDescription: string;
  sub: Subscription;

  constructor(
    private pokeService: PokemonServiceService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apollo: Apollo,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.initForm();
    this.paramsSubscription = this.activatedRoute.params.subscribe(
      (queryParams: Params) => {
        this.idPokemon = queryParams['id'];
        this.getById(this.idPokemon);
      }
    );

    this.openSubscriptionPokemon();
  }

  openSubscriptionPokemon() {
    this.sub = this.sharedService.data.subscribe((data) => {
      this.pokeDescription = data;

      this.setCommentsPokemon(this.pokeDescription);

      // this.pokeForm.setValue({ comment: this.commentsPokemon, name: 'sdsd' });
    });
  }

  setCommentsPokemon(comments: string) {
    this.pokeForm.controls['comment'].setValue(comments);
    console.log(comments, 'comments');
    // this.pokeForm.controls['comment'].setValue('sdss');
  }

  // teste() {
  //   this.sub = this.sharedService..subscribe((data) => {
  //     // this.setCommentsPokemon(data);
  //     this.languages = data;
  //     // this.setCommentsPokemon(this.languages);
  //     console.log(data, 'commentsssss');
  //   });
  // }

  editComments() {
    const pokeId = this.idPokemon;
    console.log(pokeId, 'poke');

    this.sharedService.setData({
      pokeId,
      comment: 'mock comment',
    });
  }

  initForm() {
    this.pokeForm = this.formBuilder.group({
      name: ['', Validators.required],
      comment: ['', Validators.required],
    });

    // this.pokeForm.controls['comment'].setValue('');
  }

  getById(id: number) {
    this.apollo
      .watchQuery<{ pokemon_v2_pokemon_by_pk: PokemonGql }>({
        query: GET_Search,
        variables: {
          pokeId: id,
        },
      })
      .valueChanges.subscribe(({ data }) => {
        //let pokemon = data.pokemon_v2_pokemon_by_pk.name;
        //console.log(pokemon, 'pokemon_v2_pokemon');
        this.pokeForm.controls['name'].setValue(
          data.pokemon_v2_pokemon_by_pk.name
        );
      });
  }

  ngOnDestroy() {
    console.log('Component will be destroyed');
    this.paramsSubscription.unsubscribe();
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  // getPokeNextPokemon() {
  //   this.sub = this.sharedService.send_data.subscribe((res) => {
  //     let pokemonComments = res;
  //     this.setCommentsPokemon(pokemonComments);
  //   });
  // }

  back() {
    this.router.navigateByUrl(``);
  }

  // ngOnDestroy() {
  //   if (this.sub) {
  //     this.sub.unsubscribe();
  //   }
  // }
}
