import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FamousQuote } from '@sharedModels/famous-quote.model';

@Component({
  selector: 'app-quotes-table',
  templateUrl: './quotes-table.component.html',
  styleUrls: ['./quotes-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuotesTableComponent implements OnInit {

  @Input() quotesData: FamousQuote[];
  @Output() selectedElement = new EventEmitter();

  cols: any[] = [
    { field: 'source', header: 'Quote Source', colWidth: '200px', isVisible: true },
    { field: 'quoteText', header: 'Famous Quote', colWidth: '1200px', isVisible: true },
    { field: 'sourceMedium', header: 'Medium', colWidth: '80px', isVisible: true }
  ];
  emDashes = '&#8212; &#8212;';

  constructor() { }

  ngOnInit() {
  }

  selectQuote(element: FamousQuote) {
    this.selectedElement.emit(element);
  }

}
