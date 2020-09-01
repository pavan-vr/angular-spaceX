import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { IrocketCard } from '../../rocketCard';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  @Input() public receivedData: IrocketCard[] = [];

  constructor() {}

  ngOnInit(): void {}
}
