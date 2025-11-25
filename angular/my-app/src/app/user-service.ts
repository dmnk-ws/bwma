import { Injectable } from '@angular/core';
import {IUser} from './user-component/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: IUser[] = [
    {
      id: 1,
      username: 'luke.skywalker',
      firstname: 'Luke',
      lastname: 'Skywalker',
      address: {
        id: 1,
        street: 'Old Lars Homestead',
        city: 'Anchorhead',
        state: 'Tatooine',
        zip: 'SW-3501',
        country: 'Outer Rim Territories'
      },
      email: 'luke.skywalker@jediorder.holo',
      phone: '+1138-327-421'
    },
    {
      id: 2,
      username: 'leia.organa',
      firstname: 'Leia',
      lastname: 'Organa',
      address: {
        id: 2,
        street: 'Aldera Palace',
        city: 'Aldera',
        state: 'Alderaan',
        zip: 'SW-1500',
        country: 'Core Worlds'
      },
      email: 'leia.organa@senate.holo',
      phone: '+1138-221-847'
    },
    {
      id: 3,
      username: 'din.djarin',
      firstname: 'Din',
      lastname: 'Djarin',
      address: {
        id: 3,
        street: 'Razor Crest Hangar Bay',
        city: 'Nevarro City',
        state: 'Nevarro',
        zip: 'SW-7754',
        country: 'Outer Rim Territories'
      },
      email: 'din.djarin@mandalorian.covert',
      phone: '+1138-555-MANDO'
    },
    {
      id: 4,
      username: 'ahsoka.tano',
      firstname: 'Ahsoka',
      lastname: 'Tano',
      address: {
        id: 4,
        street: 'Coral Temple Path',
        city: 'Calodan',
        state: 'Corvus',
        zip: 'SW-9021',
        country: 'Mid Rim'
      },
      email: 'ahsoka.tano@togruta.holo',
      phone: '+1138-999-4276'
    },
    {
      id: 5,
      username: 'han.solo',
      firstname: 'Han',
      lastname: 'Solo',
      email: 'han.solo@falcon.smuggler',
      phone: '+1138-777-HS12'
    },
    {
      id: 6,
      username: 'rey.skywalker',
      firstname: 'Rey',
      lastname: 'Skywalker',
      email: 'rey.skywalker@jediorder.holo',
      phone: '+1138-445-REYJ'
    },
  ];

  getUsers(): IUser[] {
    return this.users;
  }
}
