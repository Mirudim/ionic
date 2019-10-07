import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  protected quantPlayer:number = 0;

  constructor(
    protected playerService: PlayerService,
  ) {
    this.playerService.gelAll().subscribe(
      res=>{
        this.quantPlayer = res.length
      }
    )

  }

}
