import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-portal-table',
  templateUrl: './portal-table.component.html',
  styleUrls: ['./portal-table.component.css'],

  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PortalTableComponent{

  dataSource = growerField;
  columnsToDisplay = ['fieldName', 'soilMoisture', 'siNumber', 'stress'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: field | null;


}

export interface field {
  fieldName: string;
  position: number,
  soilMoisture: string;
  siNumber: number;
  stress: string;
  vwc1: number;
  vwc2: number;
  vwc3: number;
}

const growerField: field[] = [
  {
    position: 1,
    fieldName: 'Field 1',
    soilMoisture: 'Optimum',
    siNumber: 1,
    stress: 'Low',
    vwc1: 26,
    vwc2: 27,
    vwc3: 32
  },
  {
    position: 2,
    fieldName: 'Field 2',
    soilMoisture: 'Low Soil Moisture',
    siNumber: 2,
    stress: 'High',
    vwc1: 12,
    vwc2: 18,
    vwc3: 9
  },
  {
    position: 3,
    fieldName: 'Field 3',
    soilMoisture: 'High Soil Moisture',
    siNumber: 2.5,
    stress: 'High',
    vwc1: 48,
    vwc2: 50,
    vwc3: 75
  }
]
