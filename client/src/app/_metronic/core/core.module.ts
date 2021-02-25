import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [FirstLetterPipe, SafePipe, FilterPipe],
  imports: [CommonModule],
  exports: [FirstLetterPipe, SafePipe,FilterPipe],
})
export class CoreModule { }
