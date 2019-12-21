import { Component, OnInit, ViewChild, ElementRef, HostListener, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers : [
    {
      provide : NG_VALUE_ACCESSOR,
      useExisting : forwardRef(() => DropdownComponent),
      multi : true
    }
  ]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {

  @Input('options') data : any[] = [];
  dataList : any[] = [];

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
    if (this.toggled) {
      this.dataList = [...this.data];
    }
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
    if (!this.toggled) {
      this.toggle();
    } else {
      if (this.cursorIndex < this.dataList.length - 1 && this.toggled) {
        this.cursorIndex++;
        let scrollOffset = Math.floor(this.cursorIndex / 7);
        this.list.nativeElement.scrollTop = scrollOffset*150;
      }  
    }
  }

  filter(e : any) {
    if (e.key.search(/(^[\w|\d|\s]$)/g) >= 0 || e.key === 'Backspace') {
      this.cursorIndex = 0;
      this.dataList = this.data.filter(x => x.name.toLowerCase().indexOf(this.dropDownInput.nativeElement.value.toLowerCase()) >= 0);
      if (!this.toggled) {
        this.toggle();
      }
    }
  }

  selectCursor(e : any) {
    if (this.toggled) {
      this.writeValue({...this.dataList[this.cursorIndex]});
      // this.setInput();
      this.onChange(this.value);
      this.toggle(); 
    }
  }

  select(item : any) {
    this.writeValue(item);
    // this.setInput();
    this.onChange(this.value);
    this.dropDownInput.nativeElement.focus();
    this.toggle();
  }

  setInput() {
    if (this.value != null) {
      this.dropDownInput.nativeElement.value = this.value.name;
    }
  }

  // Control Value Accessor

  onChange: any = (_:any) => { }
  onTouch: any = () => { }
  isDisabled : boolean;

  writeValue(value: any) : void {
    this.value = value
    this.setInput();
  }

  registerOnChange(fn: any) : void {
    this.onChange = fn
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) : void {
    this.onTouch = fn
  }

  setDisabledState(isDisabled : boolean) : void {
    this.isDisabled = isDisabled;
  }
}
