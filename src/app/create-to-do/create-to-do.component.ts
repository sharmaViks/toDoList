import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManageListService } from '../manageList.service';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CreateToDoComponent implements OnInit {

  toDoForm: FormGroup;
  timeout: any = null;

  constructor(private manageListService:ManageListService) { }

  ngOnInit(): void {
    this.createForm();
  }

  get toDoFormControl() {
    return this.toDoForm.controls;
  }

  private createForm() {
    this.toDoForm = new FormGroup({
      taskName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      repeatTask: new FormControl('', [Validators.required])
    });
  }
 

  submitForm(event: any) {
    let todDoForm = this.toDoForm;
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        if(todDoForm.valid){
          $this.submitData()
        }
      }
    }, 1000);
  }

  private submitData() {
    let formObj = {
      taskName:this.toDoForm.value.taskName,
      description:this.toDoForm.value.description,
      repeatTask:this.toDoForm.value.repeatTask,
    }
    this.manageListService.sendUndoneList(formObj)
  }

}
