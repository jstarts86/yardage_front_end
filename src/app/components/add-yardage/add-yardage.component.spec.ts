import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYardageComponent } from './add-yardage.component';

describe('AddYardageComponent', () => {
  let component: AddYardageComponent;
  let fixture: ComponentFixture<AddYardageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddYardageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddYardageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
