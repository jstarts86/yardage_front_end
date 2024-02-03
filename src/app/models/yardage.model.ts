export class Yardage {
  id?: any | null; // bigint in SQL
  title?: string | null; // varchar(255) in SQL
  description?: string | null; // varchar(255) in SQL
  startDate?: Date | null; // date in SQL, mapped to string in TypeScript
  finishDate?: Date | null; // date in SQL, mapped to string in TypeScript
  completed?: Boolean | null;
  panels?: number | null; // integer in SQL
  costPerYard?: number | null; // numeric(38, 2) in SQL
  fabricCost?: number | null; // numeric(38, 2) in SQL
  finishedLength?: number | null; // integer in SQL
  laborCost?: number | null; // numeric(38, 2) in SQL
  liningCost?: number | null; // numeric(38, 2) in SQL
  liningPerYard?: number | null; // integer in SQL
  shopSupplyCost?: number | null; // numeric(38, 2) in SQL
  totalWidth?: number | null; // integer in SQL
  totalYardage?: number | null; // integer in SQL
  widthPerPanel?: number | null; // integer in SQL
  yardagePerWidth?: number | null; // integer in SQL
  totalCost?: number | null; // numeric(38, 2) in SQL

  constructor() {
    //   this.title = null;
    //   this.description = null;
    //   this.startDate = null;
    //   this.finishDate = null;
    //   this.panels = null;
    //   this.costPerYard = null;
    //   this.fabricCost = null;
    //   this.finishedLength = null;
    //   this.laborCost = null;
    //   this.liningCost = null;
    //   this.liningPerYard = null;
    //   this.shopSupplyCost = null;
    //   this.totalWidth = null;
    //   this.totalYardage = null;
    //   this.widthPerPanel = null;
    //   this.yardagePerWidth = null;
  }
}
