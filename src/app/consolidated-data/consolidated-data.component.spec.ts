import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedDataComponent } from './consolidated-data.component';

describe('ConsolidatedDataComponent', () => {
  let component: ConsolidatedDataComponent;
  let fixture: ComponentFixture<ConsolidatedDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsolidatedDataComponent]
    });
    fixture = TestBed.createComponent(ConsolidatedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
