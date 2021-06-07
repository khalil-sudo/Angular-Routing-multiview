import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { transform } from 'typescript';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [
        animate(
          200,
          keyframes([
            style({ transform: 'translateX(300px)' }),
            style({ transform: 'translateX(0)' }),
          ])
        ),
      ]),
      transition('*=> void', [
        animate(
          100,
          keyframes([
            style({ transform: 'translateX(0)' }),
            style({ transform: 'translateX(300px)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class HomepageComponent implements OnInit {
  todoForm = this.fb.group({
    todo: ['', Validators.required],
  });

  todoArray: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  addTodo() {
    let value = this.todoForm.value.todo;
    if (value != '') {
      this.todoArray.push(value);
      console.log(this.todoArray);
      this.todoForm.reset();
    } else {
      alert('field required!');
    }
  }
  deleteItem(todo: any) {
    for (let i = 0; i < this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
        console.log('delete item');
      }
    }
  }
}
