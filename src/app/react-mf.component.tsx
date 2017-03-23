import { Component, OnChanges, ElementRef, Input } from '@angular/core';
import {render} from 'react-dom';
import * as React from 'react';
const {MF} = require('react-mf');

@Component({
  selector: 'react-mf',
  template: `<div></div>`,
})
export class ReactMfComponent implements OnChanges {
  nativeElement: Element;
  @Input() mf: string;

  constructor(element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

  ngOnChanges() {
    const reactDiv: any = this.nativeElement.firstChild;
    render(<MF mf={this.mf} />, reactDiv);
  }

}
