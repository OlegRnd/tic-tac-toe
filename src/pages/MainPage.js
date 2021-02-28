import {Page} from '../core/Page/Page'

import { createStore } from '@core/createStore'
import { rootReducer } from '@core/redux/rootReducer'

export class MainPage extends Page {
  constructor() {
    super()
    this.name = 'main'
    this.storeSub = null
  }

  destroy() {
    this.storeSub.unsubscribe();
  }

  getRoot() {
    const store = createStore(rootReducer)
    this.storeSub = store.subscribe(()=>{})

    return `
    
          <div class="fp__header">
            <div class="fp__header_row">
              <div class="fp__header_text">Настройки игры</div>
            </div>
          </div>
          <div class="fp__options">
            <div class="fp__options_turntime">
              Время на ход:
              <input class="fp__options_turntime_input" value="30" /> секунд
            </div>
            <div class="fp__options_player">
              <div class="fp__options_player1_name">Игрок 1:</div>
              <div class="fp__options_player_select">
                <select>
                  <option value="Радик">Радик</option>
                  <option value="Натали">Натали</option>
                </select>
              </div>
              <div class="fp__options_player_create">
                <button class="fp__options_player_create_btn">
                  Создать игрока
                </button>
              </div>
            </div>
            <div class="fp__options_player">
              <div class="fp__options_player1_name">Игрок 2:</div>
              <div class="fp__options_player_select">
                <select>
                  <option value="Радик">Радик</option>
                  <option value="Натали">Натали</option>
                </select>
              </div>
              <div class="fp__options_player_create">
                <button class="fp__options_player_create_btn">
                  Создать игрока
                </button>
              </div>
            </div>
          </div>
          <div class="fp_controls">
            <button class="fp_controls_btn">Начать новую игру</button>
            <button class="fp_controls_btn">Продолжить игру</button>
          </div>
          <div class="fp__records">
            <a class="fp__records_btn" href="">Рекорды</a>
          </div>
    
    `
  }
}
