import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ConsolidatedDataComponent } from './consolidated-data/consolidated-data.component';

const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'consolidated', component: ConsolidatedDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
