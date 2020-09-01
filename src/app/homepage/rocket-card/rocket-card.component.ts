import { Component, OnInit, Input } from '@angular/core';
import { IrocketCard } from '../../rocketCard';
@Component({
  selector: 'app-rocket-card',
  templateUrl: './rocket-card.component.html',
  styleUrls: ['./rocket-card.component.css'],
})
export class RocketCardComponent implements OnInit {
  @Input() public item: IrocketCard;

  constructor() {}

  ngOnInit(): void {}
}
