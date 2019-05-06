import { Component, OnInit } from '@angular/core';
import {UserSettings} from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  origSettings: UserSettings = {
    name: 'Esko',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annually',
    notes: 'Here are some notes...'
  };

  userSettings: UserSettings = { ...this.origSettings };

  constructor() { }

  ngOnInit() {
  }

}
