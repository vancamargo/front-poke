import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Apollo } from 'apollo-angular';

import { ModalPokemonComponent } from '../shared/components/modal-pokemon/modal-pokemon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  page = 1;
  pageSize = 4;

  countries: any;
  pokeData: any;
  constructor(
    private modalService: NgbModal,
    private apollo: Apollo,
    private router: Router
  ) {}

  ngOnInit() {
    // this.apollo
    //   .watchQuery({ query: app })
    //   .valueChanges.subscribe((result: any) => {
    //     console.log(result.data.gen3_species);
    //     // this.pokemonForm.controls['plate'].setValue(this.editVehicle.plate);
    //     this.pokeData = result.data.pokemon_v2_pokemon;
    //     console.log(this.pokeData);
    //   });
  }

  add() {
    this.router.navigateByUrl(`add`);

    //modalRef.componentInstance.lesson = lesson;
  }
}
