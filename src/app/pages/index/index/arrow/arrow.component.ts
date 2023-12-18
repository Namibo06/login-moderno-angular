import { Component, OnInit } from '@angular/core';
import {faArrowRightArrowLeft} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {

  turnArrrow = faArrowRightArrowLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
