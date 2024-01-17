import { Component, Input, OnInit } from '@angular/core';
import { Yardage } from '../../models/yardage.model';
import { YardageService } from '../../services/yardage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-yardage-details',
  templateUrl: './yardage-details.component.html',
  styleUrl: './yardage-details.component.css',
})
export class YardageDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentYardage: Yardage = {
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

  message = '';
  constructor(
    private yardageService: YardageService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getYardage(this.route.snapshot.params['id']);
    }
  }

  getYardage(id: string): void {
    console.log('The Current Id is ' + id);

    this.yardageService.get(id).subscribe({
      next: (data) => {
        this.currentYardage = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  updateIsCompleted(status: boolean): void {
    const data = {
      title: this.currentYardage.title,
      description: this.currentYardage.description,
      startDate: this.currentYardage.startDate,
      finishDate: this.currentYardage.finishDate,
      completed: status,
      panels: this.currentYardage.panels,
      costPerYard: this.currentYardage.costPerYard,
      fabricCost: this.currentYardage.fabricCost,
      finishedLength: this.currentYardage.finishedLength,
      laborCost: this.currentYardage.laborCost,
      liningCost: this.currentYardage.liningCost,
      liningPerYard: this.currentYardage.liningPerYard,
      shopSupplyCost: this.currentYardage.shopSupplyCost,
      totalWidth: this.currentYardage.totalWidth,
      totalYardage: this.currentYardage.totalYardage,
      widthPerPanel: this.currentYardage.widthPerPanel,
      yardagePerWidth: this.currentYardage.yardagePerWidth,
    };
    this.message = '';

    this.yardageService.update(this.currentYardage.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentYardage.completed = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e),
    });
  }
  updateYardage(): void {
    this.message = '';

    this.yardageService
      .update(this.currentYardage.id, this.currentYardage)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'The status was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }
  deleteYardage(): void {
    this.yardageService.delete(this.currentYardage.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/yardages']);
      },
      error: (e) => console.error(e),
    });
  }
}
