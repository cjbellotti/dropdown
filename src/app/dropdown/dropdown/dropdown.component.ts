import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  data : any[] = [];

  value : any = null;

  toggled : boolean = false;

  cursorIndex : number = 0;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.doTab(null);
    }
  }
  @ViewChild('dropDownInput', { static : true}) dropDownInput : ElementRef;
  @ViewChild('list', { static : false }) list : ElementRef;
  constructor(
    private eRef : ElementRef
  ) { 
    for (var i = 0; i < 2000; i++) {
      this.data.push({
        id : i,
        name : 'Option ' + i
      })
    }
  }

  ngOnInit() {
  }

  toggle() {
    this.toggled = !this.toggled;
    this.cursorIndex = 0;
    this.dropDownInput.nativeElement.focus();
  }

  doTab(e : any) {
    if (this.toggled) {
      this.toggle();
    }
    this.setInput();
  }

  doUp(e : any) {
    if (this.cursorIndex > 0 && this.toggled) {
      this.cursorIndex--;
      let scrollOffset = Math.floor(this.cursorIndex / 7);
      this.list.nativeElement.scrollTop = scrollOffset*150;
    }
  }

  doDown(e : any) {
    if (this.cursorIndex < this.data.length - 1 && this.toggled) {
      this.cursorIndex++;
      let scrollOffset = Math.floor(this.cursorIndex / 7);
      this.list.nativeElement.scrollTop = scrollOffset*150;
    }
  }

  selectCursor(e : any) {
    if (this.toggled) {
      this.value = {...this.data[this.cursorIndex]};
      this.setInput();  
    }
  }

  select(item : any) {
    this.value = item;
    this.setInput();
    this.dropDownInput.nativeElement.focus();
  }

  setInput() {
    if (this.value != null) {
      this.dropDownInput.nativeElement.value = this.value.id + ' ' + this.value.name;
    }
  }
}
