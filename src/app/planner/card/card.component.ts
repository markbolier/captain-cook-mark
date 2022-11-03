import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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

  @Output() delete = new EventEmitter<number>();

  onClick(id: number) {
  this.delete.emit(id);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
