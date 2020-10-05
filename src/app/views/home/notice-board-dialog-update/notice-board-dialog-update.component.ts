import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoticeService } from 'src/app/shared/service/notice.service';

@Component({
  selector: 'app-notice-board-dialog-update',
  templateUrl: './notice-board-dialog-update.component.html',
  styleUrls: ['./notice-board-dialog-update.component.css']
})
export class NoticeBoardDialogUpdateComponent implements OnInit {

  public dialogFormEdit: FormGroup;
  notice;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuild: FormBuilder,
    private rest: NoticeService,
    public dialogRef: MatDialogRef<NoticeBoardDialogUpdateComponent>
  ) { }

  ngOnInit(): void {
    this.dialogFormEdit = this.formBuild.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    console.log(this.data.dataKey)
  }


  editModifyNotice(){
    this.rest.updateNotice(this.data.dataKey, this.dialogFormEdit.value).subscribe(result => {});
    this.dialogRef.close();
    this.dialogFormEdit.reset();
  }

  onCancel(): void {
    this.dialogRef.close();
    this.dialogFormEdit.reset();
  }

}
