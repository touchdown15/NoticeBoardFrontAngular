import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoticeBoardComponent } from './views/home/notice-board/notice-board.component';
import { HttpClientModule } from '@angular/common/http';
import { NoticeBoardDetailComponent } from './views/home/notice-board/notice-board-detail/notice-board-detail.component';
import { NoticeBoardDialogComponent } from './views/home/notice-board-dialog/notice-board-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoticeBoardDialogUpdateComponent } from './views/home/notice-board-dialog-update/notice-board-dialog-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoticeBoardComponent,
    NoticeBoardDetailComponent,
    NoticeBoardDialogComponent,
    NoticeBoardDialogUpdateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
