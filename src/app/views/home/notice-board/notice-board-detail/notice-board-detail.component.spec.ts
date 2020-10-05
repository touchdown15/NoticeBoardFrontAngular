import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoardDetailComponent } from './notice-board-detail.component';

describe('NoticeBoardDetailComponent', () => {
  let component: NoticeBoardDetailComponent;
  let fixture: ComponentFixture<NoticeBoardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeBoardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeBoardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
