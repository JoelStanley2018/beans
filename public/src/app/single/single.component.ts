import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['../bootstrap.css']
})
export class SingleComponent implements OnInit {
  pet: any;
  errors = {};

  constructor(private _petservice: PetService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getPet(params['id']);
      console.log(params['id']);
    });
  }

  getPet(id) {
    let observable = this._petservice.getOne(id);
    observable.subscribe( data => {
      console.log(data);
      this.pet = data['pet'];
    });
  }

  delete(id) {
    let observable = this._petservice.deleteOne(id);
    observable.subscribe( data => {
      this._router.navigate(['/']);

    });

  }

}
