import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { FamousQuote } from '@sharedModels/famous-quote.model';

@Component({
  selector: 'app-quotes-table',
  templateUrl: './quotes-table.component.html',
  styleUrls: ['./quotes-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuotesTableComponent implements OnInit {

  @Input() quotesData: FamousQuote[];

  constructor() { }

  ngOnInit() {
  }

}
