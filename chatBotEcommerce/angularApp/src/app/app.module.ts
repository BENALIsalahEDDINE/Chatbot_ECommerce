import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat/chat.service';
import { MessageComponent } from './message/message.component';
import { CommonModule } from '@angular/common';
import { PageIndexComponent } from './page-index/page-index.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    PageIndexComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
