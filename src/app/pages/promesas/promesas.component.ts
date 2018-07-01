import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.cuentaTres()
      .then(result => console.log(result))
      .catch(error => console.error(error))
  }

  ngOnInit() {
  }

  cuentaTres(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      let interval = setInterval(() => {
        console.log(++contador);

        if(contador == 3) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
