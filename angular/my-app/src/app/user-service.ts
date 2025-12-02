import { Injectable } from '@angular/core';
import { IUser } from './user-component/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly client: HttpClient;
  private users: IUser[] = [];

  constructor(client: HttpClient) {
    this.client = client;
  }

  getUsers(): IUser[] {
    return this.users;
  }

  getUser(id: number): IUser|null {
    return this.users.find((user) => user.id === id) ?? null;
  }

  fetchUsers(): Observable<IUser[]> {
    const usersObservable = this.client.get<IUser[]>('/users.json');
    usersObservable.subscribe((users) => this.users = users);

    return usersObservable;
  }
}
