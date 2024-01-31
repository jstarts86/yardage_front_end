import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardagesCalculatorComponent } from './yardages-calculator.component';

describe('YardagesCalculatorComponent', () => {
  let component: YardagesCalculatorComponent;
  let fixture: ComponentFixture<YardagesCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YardagesCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YardagesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
