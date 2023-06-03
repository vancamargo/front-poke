import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Apollo } from 'apollo-angular';
import { app } from 'src/app/graphql/graphql.queries';
import { Pokemon } from 'src/app/intefaces/pokemon.interface';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

interface Country {
  name: 'string';
  __typename: 'string';
}

// const COUNTRIES: Country[] = [
//   {
//     name: 'Russia',
//     flag: 'f/f3/Flag_of_Russia.svg',
//     area: 17075200,
//     population: 146989754,
//   },
//   {
//     name: 'France',
//     flag: 'c/c3/Flag_of_France.svg',
//     area: 640679,
//     population: 64979548,
//   },
//   {
//     name: 'Germany',
//     flag: 'b/ba/Flag_of_Germany.svg',
//     area: 357114,
//     population: 82114224,
//   },
//   {
//     name: 'Portugal',
//     flag: '5/5c/Flag_of_Portugal.svg',
//     area: 92090,
//     population: 10329506,
//   },
//   {
//     name: 'Canada',
//     flag: 'c/cf/Flag_of_Canada.svg',
//     area: 9976140,
//     population: 36624199,
//   },
//   {
//     name: 'Vietnam',
//     flag: '2/21/Flag_of_Vietnam.svg',
//     area: 331212,
//     population: 95540800,
//   },
//   {
//     name: 'Brazil',
//     flag: '0/05/Flag_of_Brazil.svg',
//     area: 8515767,
//     population: 209288278,
//   },
//   {
//     name: 'Mexico',
//     flag: 'f/fc/Flag_of_Mexico.svg',
//     area: 1964375,
//     population: 129163276,
//   },
//   {
//     name: 'United States',
//     flag: 'a/a4/Flag_of_the_United_States.svg',
//     area: 9629091,
//     population: 324459463,
//   },
//   {
//     name: 'India',
//     flag: '4/41/Flag_of_India.svg',
//     area: 3287263,
//     population: 1324171354,
//   },
//   {
//     name: 'Indonesia',
//     flag: '9/9f/Flag_of_Indonesia.svg',
//     area: 1910931,
//     population: 263991379,
//   },
//   {
//     name: 'Tuvalu',
//     flag: '3/38/Flag_of_Tuvalu.svg',
//     area: 26,
//     population: 11097,
//   },
//   {
//     name: 'China',
//     flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
//     area: 9596960,
//     population: 1409517397,
//   },
// ];

@Component({
  selector: 'cards-pokemon',
  templateUrl: './cards-pokemon.component.html',
  styleUrls: ['./cards-pokemon.component.scss'],
})
export class CardsPokemonComponent implements OnInit {
  page = 1;
  pageSize = 10;

  collectionSize: any;
  countries: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apollo: Apollo,
    private vehicleService: PokemonServiceService,
    private modalService: NgbModal,
    private router: Router
  ) {}
  pokeData: Array<Pokemon> = [];

  ngOnInit() {
    this.getAll();
  }

  // getAll() {
  //   this.apollo
  //     .watchQuery({ query: app })
  //     .valueChanges.subscribe((result: any) => {
  //       this.pokeData = result.data.pokemon_v2_pokemon;
  //       this.collectionSize = this.pokeData.length;
  //       //  console.log(result.data.gen3_species.pokemon_v2_pokemon);

  //       console.log(result.data.pokemon_v2_pokemon);
  //     });
  // }

  getAll() {
    this.vehicleService.getPokemon().subscribe({
      next: (res) => {
        this.pokeData = res;
        console.log(this.pokeData);
      },
      error: (err) => {},
    });
  }

  edit(id: number) {
    this.router.navigateByUrl(`edit/${id}`);
  }
  delete(id: number) {
    this.vehicleService.deletePokemon(id).subscribe({
      next: (res) => {
        this.getAll();
        console.log(this.pokeData);
      },
      error: (err) => {},
    });
  }

  // delete(){
  //   this.pokeService.deletePokemon(this.idPokemon).subscribe({
  //     next: (res) => {

  //     },
  //     error: (err) => {},
  //   });
  // }
}
