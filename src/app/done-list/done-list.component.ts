import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ManageListService } from '../manageList.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {
  lists: any[] = [];
  subscription: Subscription;

  constructor(private manageListService: ManageListService, private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.subscription = this.manageListService.getDoneList().subscribe(list => {
      if (list) {
        this.lists.push(list);
        this.ref.detectChanges();
      }
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  moveToUndoneList(index: number) {
    let item = this.lists[index];
    this.lists.splice(index, 1);
    this.manageListService.sendUndoneList(item);
  }

}
