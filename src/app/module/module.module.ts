import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA   } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    // ProductComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ModuleModule { }
