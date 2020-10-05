import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoardDialogUpdateComponent } from './notice-board-dialog-update.component';

describe('NoticeBoardDialogUpdateComponent', () => {
  let component: NoticeBoardDialogUpdateComponent;
  let fixture: ComponentFixture<NoticeBoardDialogUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeBoardDialogUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeBoardDialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
