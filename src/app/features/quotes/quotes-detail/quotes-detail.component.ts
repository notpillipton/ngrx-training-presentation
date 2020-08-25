import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { FamousQuote } from '@sharedModels/famous-quote.model';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuotesDetailComponent implements OnInit {

  @Input() selectedQuote: FamousQuote;

  constructor() { }

  ngOnInit() {
  }

}
