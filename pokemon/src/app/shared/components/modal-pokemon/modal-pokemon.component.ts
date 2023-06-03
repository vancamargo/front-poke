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
import { Subject, takeUntil } from 'rxjs';
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
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((queryParams: Params) => {
      this.idPokemon = queryParams['id'];
      this.getPokemon(this.idPokemon);
    });
    this.getPokeFormPoke();
  }

  getPokeFormPoke() {
    this.pokeForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
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
