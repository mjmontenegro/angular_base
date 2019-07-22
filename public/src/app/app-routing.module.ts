import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { AllComponent } from './all/all.component';
import { OneComponent } from './one/one.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: AllComponent},
  { path: '', redirectTo: 'pets', pathMatch: 'full' },
  { path: 'pets', component: AllComponent },
  { path: 'pets/new', component: NewComponent },
  { path: 'pets/edit/:id', component: EditComponent },
  { path: 'pets/:id', component: OneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

