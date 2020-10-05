import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/shared/service/notice.service';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit {

  page:number=0;
  noticesPages:Array<number>;
  noticesCurrent: NoticeService []

  constructor(
    public noticeService: NoticeService
  ) { }

  ngOnInit(): void {
    this.getNotices();
  }

  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.getNotices();
  }

  deleteNoticeApplication(id){
    this.noticeService.deleteNotice(id).subscribe(data=>{
      this.getNotices();
      console.log("Deleted");
    });
  }

  /*
  editNoticeApplication(id){

  }*/

  getNotices(){
    this.noticeService.getNoticesCurrent(this.page).subscribe(data => {
      this.noticesCurrent = data.content;
      this.noticesPages = new Array(data.totalPages);
      console.log(this.noticesCurrent);
    });
  }

}
