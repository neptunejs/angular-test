import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import {render} from 'react-dom';
import * as React from 'react';
const {StructureEditor} = require('react-ocl');
const OCL = require('openchemlib/full');

@Component({
  selector: 'react-ocl-editor',
  template: `<div></div>`,
})
export class ReactOclEditorComponent implements OnInit {
  nativeElement: Element;
  @Output() change = new EventEmitter();

  constructor(element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

  ngOnInit() {
    const reactDiv: any = this.nativeElement.firstChild;
    const onMolChange = (mol: any) => {
      if (mol) {
        this.change.emit(OCL.Molecule.fromIDCode(mol.oclid));
      }
    };
    render(<StructureEditor OCL={OCL} onChange={onMolChange} />, reactDiv);
  }

}
