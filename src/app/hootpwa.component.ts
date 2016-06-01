import { Component } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { MainComponent } from './+main';
import { TreelistComponent } from './+treelist';
import { TreeComponent } from './+tree';
import { AchievementsComponent } from './+achievements';
// import {MdInput} from '@angular2-material/input';
// import {MdCheckbox} from '@angular2-material/checkbox';
// import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

interface iRouteList{
  display:string;
  routeName: string;
  icon?:string;
  description?:string;
}

@Component({
  moduleId: module.id,
  selector: 'hootpwa-app',
  templateUrl: 'hootpwa.component.html',
  styleUrls: ['hootpwa.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    // MdInput,
    // MdCheckbox,
    // MdRadioGroup,
    // MdRadioButton,
    MdIcon,
    ROUTER_DIRECTIVES
  ],
   providers: [MdIconRegistry, ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/main', name:'Main', component: MainComponent, useAsDefault:true},
  {path: '/treelist', name:'TreeList', component: TreelistComponent},
  {path: '/tree', name:'Tree', component: TreeComponent},
  {path: '/achievement', name:'Achievement', component: AchievementsComponent},
])
export class HootpwaAppComponent {
  title:string = 'Hoot PWA';
  routes:iRouteList[] = [
    {display:'Main',routeName:'Main',description:'Your main menu.', icon:'home'},
    {display:'Tree List',routeName:'TreeList'},
    {display:'Achievements',routeName:'Achievement', icon:'grade'}
  ]
}
