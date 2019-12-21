import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movimiento-item',
  templateUrl: './movimiento-item.component.html',
  styleUrls: ['./movimiento-item.component.css']
})
export class MovimientoItemComponent implements OnInit {

  @Input('optionList1') optionList1 : any[] = [];
  @Input('optionList2') optionList2 : any[] = [];

  data : any[] = [
    {
      id : 1,
      field1 : {
        id : 1,
        name : 'Selected'
      },
      field2 : null,
      field3 : {
        name : 'Selected 2'
      },
      field4 : null,
      field5 : null
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  onTab(e : any, index : number) {
    // e.preventDefault();
    // e.stopPropagation();
    if (index == this.data.length - 1) {
      this.data.push({
        id : 1,
        field1 : null,
        field2 : null,
        field3 : null,
        field4 : null,
        field5 : null
      })  
    }
  }

  show() {
    console.log(this.data);
  }

}
