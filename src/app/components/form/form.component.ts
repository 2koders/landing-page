import { Component, OnInit } from '@angular/core';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  arrow = faPlaneArrival;

  constructor() { }

  ngOnInit(): void {
  }

}
