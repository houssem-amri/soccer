import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/admin/add-match/add-match.component';
import { AddPlayerComponent } from './components/admin/add-player/add-player.component';
import { AddTeamComponent } from './components/admin/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { ApexChartComponent } from './components/apex-chart/apex-chart.component';
import { BossComponent } from './components/boss/boss.component';
import { Boss2Component } from './components/boss2/boss2.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatcheInfoComponent } from './components/matche-info/matche-info.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { ScraptingComponent } from './components/scrapting/scrapting.component';
import { SearchComponent } from './components/search/search.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'admin/signup', component: SignupComponent },
	{ path: 'admin', component: AdminComponent },
	{ path: 'add-match', component: AddMatchComponent },
	{ path: 'addEditMatch/:id', component: AddMatchComponent },
	{ path: 'add-team', component: AddTeamComponent },
	{ path: 'Edit-team/:id', component: AddTeamComponent },
	{ path: 'add-player', component: AddPlayerComponent },
	{ path: 'Edit-player/:id', component: AddPlayerComponent },
	{ path: 'all-matches', component: MatchesComponent },
	{ path: 'players', component: PlayersComponent },
	{ path: 'teams', component: TeamsComponent },
	{ path: 'info/:id', component: MatcheInfoComponent },
	{ path: 'display-match/:id', component: DisplayMatchComponent },
	{ path: 'display-team/:id', component: DisplayTeamComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: 'apex-chart', component: ApexChartComponent },
	{ path: 'boss', component: BossComponent },
	{ path: 'boss2', component: Boss2Component },
	{ path: 'scrap', component: ScraptingComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
