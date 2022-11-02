import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() id: any;
  @Input() size: any;
  @Input() name: any;
  @Input() img: any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
