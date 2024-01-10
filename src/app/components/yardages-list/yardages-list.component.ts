import { Component, OnInit } from '@angular/core';
import { YardageService } from '../../services/yardage.service';
import { Yardage } from '../../models/yardage.model';

@Component({
  selector: 'app-yardages-list',
  templateUrl: './yardages-list.component.html',
  styleUrl: './yardages-list.component.css',
})
export class YardagesListComponent implements OnInit {
  yardages?: Yardage[];
  currentYardage: Yardage = {};
  currentIndex = -1;
  title = '';

  constructor(private yardageService: YardageService) {}

  ngOnInit(): void {
    this.retrieveYardages();
  }

  retrieveYardages(): void {
    this.yardageService.getAll().subscribe({
      next: (data) => {
        this.yardages = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  refreshList(): void {
    this.retrieveYardages();
    this.currentYardage = {};
    this.currentIndex = -1;
  }
  setActiveYardage(yardage: Yardage, index: number): void {
    this.currentYardage = yardage;
    this.currentIndex = index;
  }
  removeAllYardages(): void {
    this.yardageService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }
  searchTitle(): void {
    this.currentYardage = {};
    this.currentIndex = -1;

    this.yardageService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.yardages = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
