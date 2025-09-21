import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabiosComponent } from './labios.component';

describe('LabiosComponent', () => {
  let component: LabiosComponent;
  let fixture: ComponentFixture<LabiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
