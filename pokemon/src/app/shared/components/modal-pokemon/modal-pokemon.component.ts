import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Subject, Subscription } from 'rxjs';
import { GET_Search } from 'src/app/graphql/graphql.queries';
import { PokemonGql } from 'src/app/intefaces/pokemon-gql.interface';
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
  comment: string;

  constructor(
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
    });
  }

  setCommentsPokemon(comments: string) {
    this.pokeForm.controls['comment'].setValue(comments);
    console.log(comments, 'comments');
  }

  initForm() {
    this.pokeForm = this.formBuilder.group({
      name: ['', Validators.required],
      comment: ['', Validators.required],
    });
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
        this.pokeForm.controls['name'].setValue(
          data.pokemon_v2_pokemon_by_pk.name
        );
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    // if (this.sub) {
    //   this.sub.unsubscribe();
    // }
  }

  // response() {

  // }
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
