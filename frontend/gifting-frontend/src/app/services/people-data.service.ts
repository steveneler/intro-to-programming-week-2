import { HttpClient } from '@angular/common/http';
import { PersonListItem } from '../models/people';
import { map } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class PersonDataService {

    constructor(private client: HttpClient) {}

    getPeople() {
        return this.client.get<{data: PersonListItem[]}>('http://loclahost:1337/people')
        .pipe(
            map(response => response.data)
        );
    }
}