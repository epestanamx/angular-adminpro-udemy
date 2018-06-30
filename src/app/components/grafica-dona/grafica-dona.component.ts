import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  @Input() data: string[] = [];
  @Input() labels: number[] = [];
  @Input() chartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
