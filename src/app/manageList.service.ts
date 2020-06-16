import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ManageListService {
    private subject = new Subject<any>();
    private subject2 = new Subject<any>();

    sendUndoneList(doneList: any) {
        this.subject.next(doneList);
    }

    getUndoneList(): Observable<any> {
        return this.subject.asObservable();
    }

    sendDoneList(undoneList:any){
        this.subject2.next(undoneList);
    }

    getDoneList(): Observable<any> {
        return this.subject2.asObservable();
    }


    
}