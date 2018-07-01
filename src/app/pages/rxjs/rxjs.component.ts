import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  contarTresSuscripcion: Subscription;

  constructor() {
    this.contarTresSuscripcion = this.contarTres()
    .pipe(
      retry(2),
      map(result => result.valor),
      filter(result => result % 2 == 1)
    ).subscribe(
      numero => console.log(numero),
      error => console.error(error),
      () => console.log('Termino...')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.contarTresSuscripcion.unsubscribe()
  }

  contarTres(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;

      const interval = setInterval(() => {
        contador++;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        // if(contador == 3) {
        //   clearInterval(interval);
        //   observer.complete();
        // }
        //
        // if(contador == 2) {
        //   // clearInterval(interval);
        //   observer.error('Error en el proceso.');
        // }
      }, 1000);
    });
  }

}
