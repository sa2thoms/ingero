import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdeaViewerComponent } from './idea-viewer/idea-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
