import { Component, EventEmitter, Output } from '@angular/core';
import { CalculationTransferService } from '../../services/calculation-transfer.service';

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
  input_panels: number = 0;
  input_finished_length: number = 0;
  calculated_yardage_per_width: number = 0;
  input_width_per_panel: number = 0;
  input_cost_per_yard: number = 0;
  input_lining_per_yard: number = 0;
  calculated_labor_cost: number = 0;
  calculated_total_width: number = 0;
  calculated_total_yardage: number = 0;
  calculated_fabric_cost: number = 0;
  calculated_shop_supply_cost: number = 0;
  calculated_lining_cost: number = 0;
  calculated_total_cost: number = 0;

  @Output() calculationTransferEvent = new EventEmitter<{
    child_panels: number;
    child_finished_length: number;
    child_width_per_panel: number;
    child_cost_per_yard: number;
    child_lining_per_yard: number;
    child_yardage_per_width: number;
    child_labor_cost: number;
    child_total_width: number;
    child_total_yardage: number;
    child_fabric_cost: number;
    child_shop_supply_cost: number;
    child_lining_cost: number;
    child_total_cost: number;
  }>();
  constructor(private calculationTransferService: CalculationTransferService) {}

  roundYardagePerWidth(): void {
    this.calculated_yardage_per_width =
      ( (Math.ceil((this.input_finished_length + 16) / 18) * 18) / 36 );
  }

  calculateTotalWidth(): void {
    this.calculated_total_width =
      this.input_panels * this.input_width_per_panel;
  }
  calculateTotalYardage(): void {
    this.calculated_total_yardage =
      this.input_panels * this.calculated_yardage_per_width *
      this.input_width_per_panel;
  }
  calculateTotalShopSupplyCost(): void {
    this.calculated_shop_supply_cost = 7 * this.calculated_total_width;
  }
  calculateLiningCost(): void {
    this.calculated_lining_cost =
      this.input_lining_per_yard * this.calculated_total_yardage;
  }

calculateLaborCost(): void {
  if (this.input_finished_length <= 108) {
    this.calculated_labor_cost = 90 * this.calculated_total_width;
  } else {
    const extra = Math.ceil((this.input_finished_length - 108) / 12);
    this.calculated_labor_cost = ((extra * 10) + 90) * this.calculated_total_width;
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
    this.calculateTotalYardage();
    this.calculateTotalShopSupplyCost();
    this.calculateLaborCost();
    this.calculateLiningCost();
    this.calculateTotalCost();
  }
  sendCalculation() {
    const calculationData = {
      child_panels: this.input_panels,
      child_finished_length: this.input_finished_length,
      child_yardage_per_width: this.calculated_yardage_per_width,
      child_width_per_panel: this.input_width_per_panel,
      child_cost_per_yard: this.input_cost_per_yard,
      child_lining_per_yard: this.input_lining_per_yard,
      child_labor_cost: this.calculated_labor_cost,
      child_total_width: this.calculated_total_width,
      child_total_yardage: this.calculated_total_yardage,
      child_fabric_cost: this.calculated_fabric_cost,
      child_shop_supply_cost: this.calculated_shop_supply_cost,
      child_lining_cost: this.calculated_lining_cost,
      child_total_cost: this.calculated_total_cost,
    };

    this.calculationTransferService.changeYardage(calculationData);
  }
}
