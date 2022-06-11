import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilesComponent } from './files/files.component';
import { CommitsComponent } from './commits/commits.component';
import { BranchesComponent } from './branches/branches.component';

@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    CommitsComponent,
    BranchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
