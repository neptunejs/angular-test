import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>
      Rendering react components with angular:
      <react-mf [mf]="mf"></react-mf>
      <react-ocl [smiles]="smiles"></react-ocl>
    </h1>
  `,
})
export class AppComponent  {
  mf = 'C3H9O2N';
  smiles = 'COCCON';
}
