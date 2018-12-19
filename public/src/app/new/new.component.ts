import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['../bootstrap.css']
})
export class NewComponent implements OnInit {
  pet = {
    'name': '',
    'type': 1,
    'description': '',
    'skills': {
      'skillone': '',
      'skilltwo': '',
      'skillthree': ''
    }

  };
  errors = {};
  constructor(private _petservice: PetService, private _router: Router) { }


  ngOnInit() {
  }
  create() {
    const observable = this._petservice.createPet(this.pet);
    observable.subscribe(data => {
      console.log(data);
      if (data['status'] == 'not ok') {
        this.errors = data['errors']['errors'];
      } else {
        this._router.navigate(['/']);
      }
    });
  }

}
