import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>
      Rendering react components with angular:
      <react-mf [mf]="mf"></react-mf>
      <react-ocl [smiles]="smiles"></react-ocl>
      <react-ocl-editor (change)="onChange($event)"></react-ocl-editor>
    </h1>
  `,
})
export class AppComponent  {
  mf = 'C6H6';
  smiles = 'c1ccccc1';
  onChange(mol: any) {
    this.smiles = mol.toSmiles();
    this.mf = mol.getMolecularFormula().formula;
  }
}
