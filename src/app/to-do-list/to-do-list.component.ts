import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ManageListService } from '../manageList.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoListComponent implements OnInit, OnDestroy {
  lists: any[] = [];
  subscription: Subscription;

  constructor(private manageListService: ManageListService, private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.subscription = this.manageListService.getUndoneList().subscribe(list => {
      if (list) {
        this.lists.push(list);
        this.ref.detectChanges();
      }
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  moveToDoneList(index: number) {
    let item = this.lists[index];
    this.lists.splice(index, 1);
    this.manageListService.sendDoneList(item);
  }

}
