import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  pets: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getAll().subscribe(data => {
      this.pets = data['data'];
    })
  }
  // onDelete(id) {
  //   this._httpService.delete(id).subscribe(data => {
  //     this.ngOnInit();
  //   })
  // }

}
