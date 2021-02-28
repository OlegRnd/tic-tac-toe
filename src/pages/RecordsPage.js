import {Page} from '@core/Page/Page'

export class RecordsPage extends Page {
  constructor() {
    super()
    this.name = 'records'
  }

  getRoot() {
    return `
      <div class="records__header">
        <div class="records__header_row">
          <div class="records__header_text">Рекорды</div>
        </div>
      </div>

      <div class="records_body">
        <div class="records_row">
          <div class="column_header">Игрок</div>
          <div class="column_header">Победы</div>
          <div class="column_header">Ничьи</div>
          <div class="column_header">Поражения</div>
        </div>
        <div class="records_row">
          <div class="column_text">Игрок 1</div>
          <div class="column_text">1</div>
          <div class="column_text">1</div>
          <div class="column_text">1</div>
        </div>
        <div class="records_row">
          <div class="column_text">Игрок 2</div>
          <div class="column_text">2</div>
          <div class="column_text">2</div>
          <div class="column_text">2</div>
        </div>
      </div>
    `
  }
}
