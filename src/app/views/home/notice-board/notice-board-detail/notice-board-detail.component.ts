import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import { NoticeService } from 'src/app/shared/service/notice.service';
import { NoticeBoardDialogUpdateComponent } from '../../notice-board-dialog-update/notice-board-dialog-update.component';

@Component({
  selector: 'app-notice-board-detail',
  templateUrl: './notice-board-detail.component.html',
  styleUrls: ['./notice-board-detail.component.css']
})
export class NoticeBoardDetailComponent implements OnInit {

  notice;
  noticeId:any;

  constructor(
    public dialog: MatDialog,
    private router: ActivatedRoute,
    public noticeService: NoticeService
  ) { }

  ngOnInit(): void {
    this.loadNotice();
  }

  loadNotice(){
    this.noticeId = +this.router.snapshot.paramMap.get('id');
    this.noticeService.getNotice(this.noticeId).subscribe(
      data => this.notice = data)
  }

  editNotice(): void {
    const dialogRef = this.dialog.open(NoticeBoardDialogUpdateComponent, {
      minWidth: '500px',
      data: {
        dataKey: this.noticeId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
