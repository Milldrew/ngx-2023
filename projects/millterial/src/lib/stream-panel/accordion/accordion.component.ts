import { Component, Input, OnInit } from '@angular/core';
import { StreamsAccordionDIO } from '../../millterial.types';
import { streamList } from '../../mock-data';

@Component({
  selector: 'millterial-stream-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input()
  streamAccodrionDIO: StreamsAccordionDIO = streamList;
  constructor() {}

  ngOnInit(): void {}
}
