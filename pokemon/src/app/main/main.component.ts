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
export class MainComponent {
  page = 1;
  pageSize = 4;

  constructor(
    private modalService: NgbModal,
    private apollo: Apollo,
    private router: Router
  ) {}

  add() {
    this.router.navigateByUrl(`add`);
  }
}
