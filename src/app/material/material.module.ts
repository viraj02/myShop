import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const materialComponents = [
  MatInputModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }
