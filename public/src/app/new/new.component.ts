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

  newProduct = { name: "", price: Number, img: "" };
  err: any = { name: "", price: Number, img: "" };
  
  ngOnInit() {
  }

  onSubmit() {
    this._httpService.create(this.newProduct).subscribe(data => {
      data['data'] ? this._route.navigate(['/products']) : this.err = data['error']['errors'];
    })
  }
}

