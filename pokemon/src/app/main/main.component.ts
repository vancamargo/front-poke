import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  page = 1;
  pageSize = 4;

  constructor(private router: Router) {}

  add() {
    this.router.navigateByUrl(`add`);
  }
}
