import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RostrosComponent } from './rostros.component';

describe('RostrosComponent', () => {
  let component: RostrosComponent;
  let fixture: ComponentFixture<RostrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RostrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RostrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
