import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input('text') text: string;
  @Input('date') date: any;
  @Input('owner') owner: boolean;
  @Input('colorBackRight') colorBackRight: string;
  @Input('colorFontRight') colorFontRight: string;
  @Input('colorBackLeft') colorBackLeft: string;
  @Input('colorFontLeft') colorFontLeft: string;
  public now: Date = new Date();
  today: number = Date.now();
  constructor(){
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }
  over(){
    console.log("hello world") ; }

  ngOnInit(): void{
    
  }

}
