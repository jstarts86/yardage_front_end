import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardagesListComponent } from './yardages-list.component';

describe('YardagesListComponent', () => {
  let component: YardagesListComponent;
  let fixture: ComponentFixture<YardagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YardagesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YardagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
