import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';
import { CommitsComponent } from './commits/commits.component';
import { FilesComponent } from './files/files.component';

const routes: Routes = [
  {
    path: 'files',
    component: FilesComponent,
  },
  {
    path: 'commits',
    component: CommitsComponent,
  },
  {
    path: 'branches',
    component: BranchesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
