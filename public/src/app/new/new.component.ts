import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: Router) { }

  newPet = {
    name: "",
    type: "",
    desc: "",
    skill1: "",
    skill2: "",
    skill3: "",
    likes: 1,
    };

  err: any = {
    name: "",
    type: "",
    desc: "",
    skill1: "",
    skill2: "",
    skill3: "",
    likes: 1,
    };
    uniqueError: Boolean = false;


  ngOnInit() {
  }

  // onSubmit() {
  //   this._httpService.create(this.newPet).subscribe(data => {
  //     data['data'] ? this._route.navigate(['/pets']) : this.err = data['error']['errors'];
  //   })
  // }
  onSubmit() {
    this._httpService.checkName(this.newPet.name).subscribe(data => {
      if (data['data']) {
        this.uniqueError = true;
      } else {
        this._httpService.create(this.newPet).subscribe(data => {
          data['data'] ? this._route.navigate(['/pets']) : this.err = data['error']['errors'];
        })
      }
    })



  }

}

