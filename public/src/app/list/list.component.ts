import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../bootstrap.css']
})
export class ListComponent implements OnInit {
  pets = [];
  constructor(private _petservice: PetService) { }

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets() {
    const observable = this._petservice.getPets();
    observable.subscribe( data => {
      this.pets = data['pets'];
      console.log(data);
    });
  }

}
