import { Component } from '@angular/core';

@Component({
  selector: 'app-yardages-calculator',
  templateUrl: './yardages-calculator.component.html',
  styleUrl: './yardages-calculator.component.css',
})
export class YardagesCalculatorComponent {
  //   Panels
  // Finished length
  // Yardage per width
  // Width per panel
  // Total width = Panels * Width per Panel
  // total yardage= Panels * yardage per width * width per panel
  // $ per yard
  // Fabric Cost= Total Yardage * $ per yard
  // Shop supply cost = 7 * total width
  // Lining per Yard =
  // Lining Cost = Total yardage * lining per yard
  // Labor =
  // Total cost  =
  input_panels: number;
  input_finished_length: number;
  calculated_yardage_per_width: number;
  input_width_per_panel: number;
  input_cost_per_yard: number;
  input_lining_per_yard: number;
  calculated_labor_cost: number;
  calculated_total_width: number;
  calculated_total_yardage: number;
  calculated_fabric_cost: number;
  calculated_shop_supply_cost: number;
  calculated_lining_cost: number;
  calculated_total_cost: number;
  constructor() {
    this.input_panels = 0;
    this.input_finished_length = 0;
    this.calculated_yardage_per_width = 0;
    this.input_width_per_panel = 0;
    this.input_cost_per_yard = 0;
    this.input_lining_per_yard = 0;
    this.calculated_labor_cost = 0;
    this.calculated_total_width = 0;
    this.calculated_total_yardage = 0;
    this.calculated_fabric_cost = 0;
    this.calculated_shop_supply_cost = 0;
    this.calculated_lining_cost = 0;
    this.calculated_total_cost = 0;
  }
  roundYardagePerWidth(): void {
    this.calculated_yardage_per_width =
      ( Math.ceil((this.input_finished_length + 16) / 18) * 18 ) / 36;
  }

  calculateTotalWidth(): void {
    this.calculated_total_width =
      this.input_panels * this.input_width_per_panel;
  }
  calculateTotalYardage(): void {
    this.calculated_total_yardage =
      this.input_panels * this.calculated_yardage_per_width +
      this.input_width_per_panel;
  }
  calculateTotalShopSupplyCost(): void {
    this.calculated_shop_supply_cost = 7 * this.calculated_total_width;
  }
  calculateLiningCost(): void {
    this.calculated_lining_cost =
      this.input_lining_per_yard + this.calculated_total_yardage;
  }
  calculateLaborCost(): void {
    if (this.input_finished_length <= 108) {
      this.calculated_labor_cost = 90 * this.calculated_total_width;
    } else {
      this.calculated_labor_cost = Math.ceil(
        ((this.input_finished_length - 108) / 12) * 10) + 90) * this.calculated_total_width;
    }
  }
  calculateTotalCost(): void {
    this.calculated_total_cost =
      this.calculated_fabric_cost +
      this.calculated_lining_cost +
      this.calculated_labor_cost;
  }
  fullyCalculate(): void {
    this.roundYardagePerWidth();
    this.calculateTotalWidth();
    this.calculateTotalShopSupplyCost();
    this.calculateLaborCost();
    this.calculateLiningCost();
    this.calculateTotalCost();
  }
}
