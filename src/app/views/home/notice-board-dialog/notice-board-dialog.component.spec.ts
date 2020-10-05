import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoardDialogComponent } from './notice-board-dialog.component';

describe('NoticeBoardDialogComponent', () => {
  let component: NoticeBoardDialogComponent;
  let fixture: ComponentFixture<NoticeBoardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeBoardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeBoardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
