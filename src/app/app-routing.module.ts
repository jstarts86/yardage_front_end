import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YardagesListComponent } from './components/yardages-list/yardages-list.component';
import { YardageDetailsComponent } from './components/yardage-details/yardage-details.component';
import { AddYardageComponent } from './components/add-yardage/add-yardage.component';
import { YardagesCalculatorComponent } from './components/yardages-calculator/yardages-calculator.component';

const routes: Routes = [
  { path: '', redirectTo: 'yardages', pathMatch: 'full' },
  { path: 'yardages', component: YardagesListComponent },
  { path: 'yardages/:id', component: YardageDetailsComponent },
  { path: 'add', component: AddYardageComponent },
  { path: 'calculator', component: YardagesCalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
