import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivityItemComponent } from './activity-item/activity-item.component';
import { SmallErrorComponent } from './small-error/small-error.component';

@NgModule({
  declarations: [ActivityItemComponent, SmallErrorComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [ActivityItemComponent, ReactiveFormsModule, SmallErrorComponent],
})
export class SharedModule {}
