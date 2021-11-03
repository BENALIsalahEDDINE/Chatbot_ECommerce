import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { Message } from '../model/message.model';
import { TextMessage } from '../model/text-messsage.model';
import { ResponseMessage } from '../model/response-message.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
//ss
  BACK_ENABLED: boolean = true;
  @Input('messages') messages: Message[];
  @Input('colorBackRight') colorBackRight: string;
  @Input('colorFontRight') colorFontRight: string;
  @Input('colorBackLeft') colorBackLeft: string;
  @Input('colorFontLeft') colorFontLeft: string;

  textInput = '';

  constructor(private chatService: ChatService) {}

  ngOnInit() {


  }

  sendMessage(){
    let newMessage: Message = { text: this.textInput, date: "", userOwner: true};

    this.messages.push(newMessage);

    let messageBack: TextMessage = { "firstname": environment.firstName, "text": this.textInput}
   
    if(this.BACK_ENABLED){
      
      this.chatService.getRebotResponse(messageBack).subscribe((messageReturn : any)=>{
        let reply: Message = { text: messageReturn.text, date: "", userOwner: false};
        this.messages.push(reply);
        console.log(reply) ;
      }) ;
    }
    this.textInput = '';
  }

  onKey(event: any){
    if(event.keyCode == 13){
      this.sendMessage();
    }
  }

 

}
