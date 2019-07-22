// import { AppComponent } from './app.component';
// import { Component, OnInit } from '@angular/core';
// import { HttpService } from './http.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   cakes = [];
//   cake: any;
//   show_all = true;
//   show_one = false;
//   createResult: any = "";
//   updateResult: any = "";
//   deleteResult: any = "";
//   newCake: any;
//   selectedCake: any;



//   constructor(private _httpService: HttpService) { }

//   ngOnInit() {
//     this.newCake = { title: "", description: "" }
//     this.cake = { title: "", description: "" }
//     this.getCakesFromService();
//   }

//   getCakesFromService = () => this._httpService.getAll().subscribe(data => {
//     this.cakes = data['data'];
//   })
//   getCakeFromService = (id) => this._httpService.getOne(id).subscribe(data => {
//     this.selectedCake = data['data'];
//     let sum = 0;
//     for (let rating of this.selectedCake.ratings) {
//       sum += rating.numOfStars ? rating.numOfStars : 5;
//     }
//     this.selectedCake.avg = sum / this.selectedCake.ratings.length
// })
//   createCakeFromService = (cake) => this._httpService.create(cake).subscribe(data => this.createResult = data)
//   deleteCakesFromService = (id) => this._httpService.delete(id).subscribe(data => this.deleteResult = data['data'])
//   updateCakesFromService = (id, cake) => this._httpService.update(id, cake).subscribe(data => this.updateResult = data)

//   onButtonClick = () => {
//     this.show_all = true;
//     this.getCakesFromService();
//   }

//   // showOneBtn = (id) => {
//   //   this.getCakesFromService(id);
//   //   this.show_one = true
//   // }

//   onSubmitCreate = () => {
//     this.createCakeFromService(this.newCake)
//     this.newCake = { bakerName: "", imageURL: "" };
//     this.getCakesFromService();
//   }

//   onSubmitEdit = () => {
//     this.updateCakesFromService(this.cake._id, this.cake);
//     this.cake = { title: "", description: "" };
//     this.getCakesFromService();
//   }
//   // onSubmitSetupEdit = (id) => {
//   //   this.getCakesFromService(id);
//   // }

//   onSubmitDelete = (id) => {
//     this.deleteCakesFromService(id);
//     this.getCakesFromService();
//   }

//   onClickShow = (id) => {
//     this._httpService.getOne(id).subscribe(data => { this.selectedCake = data['data'] })
//   }
//   onClickPic = (id) => {
//     this.getCakeFromService(id)

//   }
//   onSubmitRating = (rating, cake) => {
//     console.log("my id", cake._id, "my rating", rating)
//     this._httpService.rate(cake._id, rating).subscribe(data => this.updateResult = data)
//     this.getCakesFromService();
//   }

// }


// New Start
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['/app.component.css']
})
export class AppComponent {
  title = 'Pet Shelter';
}
