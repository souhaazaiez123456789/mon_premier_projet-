import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouhaComponent } from './souha.component';

describe('SouhaComponent', () => {
  let component: SouhaComponent;
  let fixture: ComponentFixture<SouhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
