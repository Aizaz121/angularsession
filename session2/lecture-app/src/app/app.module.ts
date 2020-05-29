import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TestDemoComponent } from './test-demo/test-demo.component';
import { BasicHighLight } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { CockpitComponent } from './cockpit/cockpit.component';
import { DatadisplayComponent } from './datadisplay/datadisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDemoComponent,
    BasicHighLight,
    BetterHighlightDirective,
    CockpitComponent,
    DatadisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
