import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ModalComponent } from './components/modal/modal.component';
import { CardComponent } from './components/card/card.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ModalComponent,
    CardComponent,
    BreadcrumbComponent,
    DropdownComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
