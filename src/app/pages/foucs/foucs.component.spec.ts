import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoucsComponent } from './foucs.component';

describe('FoucsComponent', () => {
  let component: FoucsComponent;
  let fixture: ComponentFixture<FoucsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoucsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoucsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
