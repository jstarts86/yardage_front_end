import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardageDetailsComponent } from './yardage-details.component';

describe('YardageDetailsComponent', () => {
  let component: YardageDetailsComponent;
  let fixture: ComponentFixture<YardageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YardageDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YardageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
