import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicfutComponent } from './publicfut.component';

describe('PublicfutComponent', () => {
  let component: PublicfutComponent;
  let fixture: ComponentFixture<PublicfutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicfutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicfutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
