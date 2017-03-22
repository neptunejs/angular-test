import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {render} from 'react-dom';
import * as React from 'react';
const {SvgRenderer} = require('react-ocl');
const OCL = require('openchemlib/minimal');

@Component({
  selector: 'react-ocl',
  template: `<div></div>`,
})
export class ReactOclComponent implements OnInit {
  nativeElement: Element;
  @Input() smiles: string;

  constructor(element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

  ngOnInit() {
    const reactDiv: any = this.nativeElement.firstChild;
    render(<SvgRenderer OCL={OCL} smiles={this.smiles} />, reactDiv);
  }

}
