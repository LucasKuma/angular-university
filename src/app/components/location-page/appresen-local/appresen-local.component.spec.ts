import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppresenLocalComponent } from './appresen-local.component';

describe('AppresenLocalComponent', () => {
  let component: AppresenLocalComponent;
  let fixture: ComponentFixture<AppresenLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppresenLocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppresenLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
