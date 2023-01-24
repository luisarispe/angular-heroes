import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { FormsModule } from '@angular/forms';
import { ModalPollComponent } from './components/modal-poll/modal-poll.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    CapitalizePipe,
    ModalPollComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CapitalizePipe, FormsModule, ModalPollComponent,SpinnerComponent]
})
export class SharedModule { }
