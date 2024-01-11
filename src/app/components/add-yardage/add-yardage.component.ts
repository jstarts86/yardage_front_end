import { Component } from '@angular/core';
import { Yardage } from '../../models/yardage.model';
import { YardageService } from '../../services/yardage.service';

@Component({
  selector: 'app-add-yardage',
  templateUrl: './add-yardage.component.html',
  styleUrl: './add-yardage.component.css',
})
export class AddYardageComponent {
  yardage: Yardage = {
    title: '',
    description: '',
    startDate: new Date(),
    finishDate: null,
    isCompleted: false,
    panels: 0,
    costPerYard: 0,
    fabricCost: 0, // numeric(38, 2) in SQL
    finishedLength: 0, // integer in SQL
    laborCost: 0, // numeric(38, 2) in SQL
    liningCost: 0, // numeric(38, 2) in SQL
    liningPerYard: 0, // integer in SQL
    shopSupplyCost: 0, // numeric(38, 2) in SQL
    totalWidth: 0, // integer in SQL
    totalYardage: 0, // integer in SQL
    widthPerPanel: 0, // integer in SQL
    yardagePerWidth: 0, // integer in SQL
  };
  submitted = false;
  constructor(private yardageService: YardageService) {}

  saveYardage(): void {
    const data = {
      title: this.yardage.title,
      description: this.yardage.description,
      startDate: this.yardage.startDate,
      finishDate: this.yardage.finishDate,
      isCompleted: this.yardage.isCompleted,
      panels: this.yardage.panels,
      costPerYard: this.yardage.costPerYard,
      fabricCost: this.yardage.fabricCost,
      finishedLength: this.yardage.finishedLength,
      laborCost: this.yardage.laborCost,
      liningCost: this.yardage.liningCost,
      liningPerYard: this.yardage.liningPerYard,
      shopSupplyCost: this.yardage.shopSupplyCost,
      totalWidth: this.yardage.totalWidth,
      totalYardage: this.yardage.totalYardage,
      widthPerPanel: this.yardage.widthPerPanel,
      yardagePerWidth: this.yardage.yardagePerWidth,
    };
    this.yardageService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }
  newYardage(): void {
    this.submitted = false;
    this.yardage = {
      title: '',
      description: '',
      startDate: new Date(),
      finishDate: new Date(),
      isCompleted: false,
      panels: 0,
      costPerYard: 0,
      fabricCost: 0, // numeric(38, 2) in SQL
      finishedLength: 0, // integer in SQL
      laborCost: 0, // numeric(38, 2) in SQL
      liningCost: 0, // numeric(38, 2) in SQL
      liningPerYard: 0, // integer in SQL
      shopSupplyCost: 0, // numeric(38, 2) in SQL
      totalWidth: 0, // integer in SQL
      totalYardage: 0, // integer in SQL
      widthPerPanel: 0, // integer in SQL
      yardagePerWidth: 0,
    };
  }
}
