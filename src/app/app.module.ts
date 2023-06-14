import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { OverviewComponent } from './core/overview/overview.component';
import { ActivityLogComponent } from './core/activity-log/activity-log.component';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';

import { TableComponent } from './shared/components/table/table.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestRaisedComponent } from './core/request-raised-menu/request-raised/request-raised.component';
import { RequestDetailsComponent } from './core/request-raised-menu/request-details/request-details.component';
import { PieChartComponent } from './shared/components/charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './shared/components/charts/bar-chart/bar-chart.component';
import { VerticalProgressBarsComponent } from './shared/components/progress-bar/vertical-progress-bars/vertical-progress-bars.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { SocietyDetailsComponent } from './core/society-details/society-details.component';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { SocietyDetailsSpecificComponent } from './core/society-details/society-details-specific/society-details-specific.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    OverviewComponent,
    ActivityLogComponent,
    TableComponent,
    ConfirmDialogComponent,
    LoginComponent,
    RequestRaisedComponent,
    RequestDetailsComponent,

    PieChartComponent,
    BarChartComponent,
    VerticalProgressBarsComponent,
    SocietyDetailsComponent,
    SocietyDetailsSpecificComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PanelMenuModule,
    ChartModule,
    DividerModule,
    DropdownModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule,
    DialogModule,
    RadioButtonModule,
    CalendarModule,
    HttpClientModule,
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
