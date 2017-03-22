import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {render} from 'react-dom';
import * as React from 'react';
const {MF} = require('react-mf');

@Component({
  selector: 'react-mf',
  template: `<div></div>`,
})
export class ReactMfComponent implements OnInit {
  nativeElement: Element;
  @Input() mf: string;

  constructor(element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

  ngOnInit() {
    const reactDiv: any = this.nativeElement.firstChild;
    render(<MF mf={this.mf} />, reactDiv);
  }

}
