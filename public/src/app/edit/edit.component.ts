import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editProd: any;
  err: any = { name: "", price: Number, img: "" };

  constructor(private _httpService: HttpService, private _route: Router, private _router: ActivatedRoute) { }

  ngOnInit() {
    this._router.params.subscribe(params => {
      this._httpService.getOne(params['id']).subscribe(data => {
        this.editProd = data['data'];
      })
    })
  }

  onSubmit() {
    this._httpService.update(this.editProd._id, this.editProd).subscribe(data => {
      if(data['data']) {
        this._route.navigate(['/products'])
      } else {
        this.err = data['error']['errors'];
      }
    })
  }
}