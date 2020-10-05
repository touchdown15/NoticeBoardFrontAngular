import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NoticeService } from 'src/app/shared/service/notice.service';

@Component({
  selector: 'app-notice-board-dialog',
  templateUrl: './notice-board-dialog.component.html',
  styleUrls: ['./notice-board-dialog.component.css']
})
export class NoticeBoardDialogComponent implements OnInit {

  public dialogForm: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private rest: NoticeService,
    public dialogRef: MatDialogRef<NoticeBoardDialogComponent>
  ) { }

  ngOnInit(): void {
    this.dialogForm = this.formBuild.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  createNotice(){
    this.rest.addNotice(this.dialogForm.value).subscribe(result =>{});
    this.dialogRef.close();
    this.dialogForm.reset();
  }

  onCancel(): void {
    this.dialogRef.close();
    this.dialogForm.reset();
  }

}
