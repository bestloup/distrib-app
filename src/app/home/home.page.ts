import { Component, OnInit } from '@angular/core';
import { Marchand, MarchandService } from '../services/marchand.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  marchands: Marchand[];

  constructor(private marchandService: MarchandService) { }

  ngOnInit() {
    this.marchandService.getMarchands().subscribe(res => {
      this.marchands = res;
    });
  }

  remove(item) {
    this.marchandService.removeMarchand(item.id);
  }
}
