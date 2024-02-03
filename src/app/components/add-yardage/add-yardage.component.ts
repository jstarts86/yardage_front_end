import { Component, OnDestroy } from '@angular/core';
import { Yardage } from '../../models/yardage.model';
import { YardageService } from '../../services/yardage.service';
import { CalculationTransferService } from '../../services/calculation-transfer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-yardage',
  templateUrl: './add-yardage.component.html',
  styleUrl: './add-yardage.component.css',
})
export class AddYardageComponent implements OnDestroy {
  private subscription: Subscription;
  yardage: Yardage = {
    title: '',
    description: '',
    startDate: new Date(),
    finishDate: null,
    completed: false,
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
  constructor(
    private yardageService: YardageService,
    private calculationTransferService: CalculationTransferService,
  ) {
    this.subscription =
      this.calculationTransferService.currentYardage.subscribe(
        (calculations) => {
          if (calculations) {
            this.updateFormWithCalculations(calculations);
          }
        },
      );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  updateFormWithCalculations(yardage: any): void {
    this.yardage.panels = yardage.child_panels;
    this.yardage.finishedLength = yardage.child_finished_length;
    this.yardage.widthPerPanel = yardage.child_width_per_panel;
    this.yardage.costPerYard = yardage.child_cost_per_yard;
    this.yardage.liningPerYard = yardage.child_lining_per_yard;
    this.yardage.laborCost = yardage.child_labor_cost;
    this.yardage.totalWidth = yardage.child_labor_cost;
    this.yardage.totalYardage = yardage.child_total_yardage;
    this.yardage.fabricCost = yardage.child_fabric_cost;
    this.yardage.shopSupplyCost = yardage.child_shop_supply_cost;
    this.yardage.liningCost = yardage.child_lining_cost;
    this.yardage.totalCost = yardage.child_total_cost;
  }
  saveYardage(): void {
    const data = {
      title: this.yardage.title,
      description: this.yardage.description,
      startDate: this.yardage.startDate,
      finishDate: this.yardage.finishDate,
      completed: this.yardage.completed,
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
        console.log(this.yardage.completed);
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
      completed: false,
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
