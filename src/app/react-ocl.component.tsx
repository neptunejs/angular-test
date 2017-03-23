import { Component, OnChanges, ElementRef, Input } from '@angular/core';
import {render} from 'react-dom';
import * as React from 'react';
const {SvgRenderer} = require('react-ocl');
const OCL = require('openchemlib/minimal');

@Component({
  selector: 'react-ocl',
  template: `<div></div>`,
})
export class ReactOclComponent implements OnChanges {
  nativeElement: Element;
  @Input() smiles: string;

  constructor(element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

  ngOnChanges() {
    const reactDiv: any = this.nativeElement.firstChild;
    render(<SvgRenderer OCL={OCL} smiles={this.smiles} />, reactDiv);
  }

}
