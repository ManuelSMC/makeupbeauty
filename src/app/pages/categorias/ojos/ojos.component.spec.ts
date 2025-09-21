import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OjosComponent } from './ojos.component';

describe('OjosComponent', () => {
  let component: OjosComponent;
  let fixture: ComponentFixture<OjosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OjosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OjosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
