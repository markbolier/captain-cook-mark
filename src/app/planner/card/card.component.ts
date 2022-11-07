import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() id!: number;

  @Input() size!: string;

  @Input() name!: string;

  @Input() img!: string;

  @Output() delete = new EventEmitter<number>();

  onClick(id: number) {
    this.delete.emit(id);
  }

  constructor() {}

  ngOnInit(): void {}
}
