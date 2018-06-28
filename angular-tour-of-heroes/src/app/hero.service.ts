import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {  

  constructor(private messageSerive: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageSerive.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
