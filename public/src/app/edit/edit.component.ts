import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editPet: any;
  err: any = { name: "", price: Number, img: "" };
  uniqueError: Boolean = false;
  constructor(private _httpService: HttpService, private _route: Router, private _router: ActivatedRoute) { }

  ngOnInit() {
    this._router.params.subscribe(params => {
      this._httpService.getOne(params['id']).subscribe(data => {
        this.editPet = data['data'];
      })
    })
  }

  onSubmit1() {
  }
  onSubmit() {
    this._httpService.checkName(this.editPet.name).subscribe(data => {
      if (data['data']) {
        this.uniqueError = true;
      } else {
        this._httpService.update(this.editPet._id, this.editPet).subscribe(data => {
          if(data['data']) {
            this._route.navigate([`/pets/${this.editPet._id}`])
          } else {
            this.err = data['error']['errors'];
          }
        })
            }})
      }


}
