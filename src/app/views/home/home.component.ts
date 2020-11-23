import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  sair(){
    this.saiu.emit(true);
  }

  ngOnInit(): void {
  }
@Output() saiu = new EventEmitter();
}
