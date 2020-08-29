import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { FilterComponent } from '../filter/filter.component';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  public receivedData = [];
  public element = {};
  public filteredData;
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => (this.receivedData = data));
    this.receivedData.map((item) => {
      
    })
  }
}
