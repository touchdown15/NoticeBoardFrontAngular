import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NoticeBoardDetailComponent } from './views/home/notice-board/notice-board-detail/notice-board-detail.component';

const routes: Routes = [
  {
    path:'notices',
    component: HomeComponent
  },
  {
    path:'',
    redirectTo:'notices',
    pathMatch: 'full'
  },
  {
    path:'notices/:id',
    component: NoticeBoardDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
