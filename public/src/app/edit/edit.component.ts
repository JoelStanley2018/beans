import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet = {};
  errors = {};

  constructor(private _petservice: PetService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getPet(params['id']);
    });
  }
getPet(id) {
  const observable = this._petservice.getOne(id);
  observable.subscribe( data => {
    this.pet = data['pet'];
  });
}

update(id) {
  const observable = this._petservice.updateOne(id, this.pet);
  observable.subscribe( data => {
    if  (data['status'] == 'not ok') {
      this.errors = data['errors']['errors'];
    } else {
      this._router.navigate(['/']);
    }
  });
}

}
