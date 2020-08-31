import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { FilterComponent } from '../filter/filter.component';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  @Input() public receivedData = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}
}
