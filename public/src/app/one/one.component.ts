import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  pet: any;
  showing: String = "visible"
  err: any;

  constructor(private _httpService: HttpService, private _router: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    this._router.params.subscribe(params => {
      this._httpService.getOne(params['id']).subscribe(data => {
        this.pet = data['data'];
      })
    })
  }

  onAdopt() {
    this._httpService.delete(this.pet._id).subscribe(data => {
      if(data['data']) {
        this._route.navigate(['/'])
      } else {
        this.err = data['error']['errors'];
      }
    })
  }

  onLike() {
    this.pet.likes +=1;
    this._httpService.update(this.pet._id, this.pet).subscribe(data => {
      if(data['data']) {
        this.showing = "hidden"
      } else {
        this.err = data['error']['errors'];
      }
    })

  }

}





