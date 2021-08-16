import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeroComponent } from './components/hero/hero.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { SectionComponent } from './components/section/section.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTablesComponent } from './components/admin/matches-tables/matches-tables.component';
import { TeamsTableComponent } from './components/admin/teams-table/teams-table.component';
import { PlayersTableComponent } from './components/admin/players-table/players-table.component';
import { AddTeamComponent } from './components/admin/add-team/add-team.component';
import { AddPlayerComponent } from './components/admin/add-player/add-player.component';
import { AddMatchComponent } from './components/admin/add-match/add-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './components/info/info.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { BannerComponent } from './components/banner/banner.component';
import { AddPlayerFormComponent } from './components/admin/add-player-form/add-player-form.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamComponent } from './components/team/team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { BtnComponent } from './components/btn/btn.component';
import { MatcheInfoComponent } from './components/matche-info/matche-info.component';

import { HttpClientModule } from '@angular/common/http';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { PipePipe } from './components/pipe/pipe.pipe';
import { VoyellesPipe } from './components/pipe/voyelles.pipe';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { SearchComponent } from './components/search/search.component';
import { SigninComponent } from './components/signin/signin.component';
import { MyFilterPipe } from './components/pipe/my-filter.pipe';

import { UsersTablesComponent } from './components/admin/users-tables/users-tables.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { RowColorDirective } from './directive/row-color.directive';

import { ChartComponent } from './components/chart/chart.component';
import { DataTableComponent } from './components/admin/data-table/data-table.component';
import { NgxDatatableModule } from '@tusharghoshbd/ngx-datatable';
import { MatFormFieldModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { DataTablePagComponent } from './components/admin/data-table-pag/data-table-pag.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialSharedModule } from './components/admin/material-shared/material-shared.module';
import { ChartsModule } from 'ng2-charts';
import { ModalModule } from './components/modal/modal.module';
import { ApexChartComponent } from './components/apex-chart/apex-chart.component';
import { ChartsComponent } from './components/apex-chart/charts/charts.component';
import { BossComponent } from './components/boss/boss.component';
import { C1Component } from './components/boss/c1/c1.component';
import { C2Component } from './components/boss/c2/c2.component';
import { AdDirective } from './components/boss/ad.directive';
import { AdBannerComponent } from './components/boss/ad-banner/ad-banner.component';
import { AdService } from './components/boss/ad.service';
import { Boss2Component } from './components/boss2/boss2.component';
import { Co1Component } from './components/boss2/co1/co1.component';
import { CoComponent } from './components/boss2/co/co.component';
import { Co2Component } from './components/boss2/co2/co2.component';
import { AnchorDirective } from './components/boss2/anchor.directive';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Co3Component } from './components/boss2/co3/co3.component';
import { Co4Component } from './components/boss2/co4/co4.component';
import { ScraptingComponent } from './components/scrapting/scrapting.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		LoginComponent,
		SignupComponent,
		HeroComponent,
		ResultComponent,
		NewsComponent,
		SectionComponent,
		VideosComponent,
		BlogComponent,
		AdminComponent,
		MatchesTablesComponent,
		TeamsTableComponent,
		PlayersTableComponent,
		AddTeamComponent,
		AddPlayerComponent,
		AddMatchComponent,
		InfoComponent,
		MatchesComponent,
		MatchComponent,
		BannerComponent,
		AddPlayerFormComponent,
		PlayerComponent,
		PlayersComponent,
		TeamComponent,
		TeamsComponent,
		BtnComponent,
		MatcheInfoComponent,
		DisplayMatchComponent,
		PipePipe,
		VoyellesPipe,
		DisplayTeamComponent,
		SearchComponent,
		SigninComponent,
		MyFilterPipe,
		UsersTablesComponent,
		JwPaginationComponent,
		RowColorDirective,
		ChartComponent,
		DataTableComponent,
		DataTablePagComponent,
		ApexChartComponent,
		ChartsComponent,
		BossComponent,
		C1Component,
		C2Component,
		AdDirective,
		AdBannerComponent,
		Boss2Component,
		Co1Component,
		CoComponent,
		Co2Component,
		AnchorDirective,
		Co3Component,
		Co4Component,
		ScraptingComponent
	],
	imports: [
		ChartsModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		// InMemoryWebApiModule.forRoot(DataService),
		HttpClientModule,
		NgxDatatableModule,
		MatTableModule,
		MatPaginatorModule,
		MatTableModule,
		MatSortModule,
		MatFormFieldModule,
		BrowserAnimationsModule,
		MaterialSharedModule,
		ModalModule
	],
	providers: [ AdService ],
	entryComponents: [ C1Component, C2Component, Co2Component, Co1Component, Co3Component, Co4Component ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
