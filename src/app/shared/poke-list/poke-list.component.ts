import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  constructor(
    private PokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.PokeApiService.apiListAllPokemons.subscribe(
      res => res
    )
  }

}