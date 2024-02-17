import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardagesDashboardComponent } from './yardages-dashboard.component';

describe('YardagesDashboardComponent', () => {
  let component: YardagesDashboardComponent;
  let fixture: ComponentFixture<YardagesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YardagesDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YardagesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
