import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PersonCreate, PersonListItem } from 'src/app/models/people';
import { PersonDataService } from 'src/app/services/people-data.service';
 
@Component({
  selector: 'app-people-entry',
  templateUrl: './people-entry.component.html',
  styleUrls: ['./people-entry.component.css']
})
export class PeopleEntryComponent {
 
  form = this.fb.group({
    firstName: new FormControl<string>('', {
      validators: [Validators.required, Validators.maxLength(100)]
    }),
    lastName: new FormControl<string>('', { 
      validators: [Validators.required, Validators.maxLength(100)]
    })
  });
 
  get firstName() { return this.form.controls.firstName; }
  get lastName() { return this.form.controls.lastName; }
 
  constructor(private fb:FormBuilder, private service: PersonDataService) {}
 
  demo$!: Observable<PersonListItem>;
  addPerson() {
    if(this.form.invalid) {
      console.log('The form is broke, yo. Fix that');
    } else {
    const modelToSend:PersonCreate = this.form.value as PersonCreate;
    this.demo$ = this.service.addPerson(modelToSend)
    }
}
}

