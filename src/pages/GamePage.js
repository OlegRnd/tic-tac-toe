import {Page} from '../core/Page/Page'

export class GamePage extends Page {
  constructor() {
    super()
    this.name = 'game'
  }

  render() {
    return `
      <div class="container">
        <div class="gp__header">
          <div class="container">
            <div class="gp__header_row">
              <div class="gp__header_countdown">
                <div class="gp__header_countdown_text">До конца хода</div>
                <div class="gp__header_countdown_body">29</div>
              </div>

              <div class="gp__header_score">
                <div class="gp__header_score_text">
                  Текущая игровая сессия
                </div>
                <div class="gp__header_score_body">&nbsp;1:0</div>
              </div>

              <div class="gp__header_controls">
                <div class="gp__header_controls_row">
                  <div class="gp__header_controls_column">
                    <div class="gp__header_controls_text">Пауза</div>
                    <div class="gp__header_controls_button">
                      <span class="material-icons">pause</span>
                    </div>
                  </div>
                  <div class="gp__header_controls_column">
                    <div class="gp__header_controls_text">Играть</div>
                    <div class="gp__header_controls_button">
                      <span class="material-icons">play_arrow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gp__main">
          <div class="container">
            <div class="gp__main_row">
              <div class="gp__main_playerinfo gp__main_playerinfo_player1">
                <div class="gp__main_playerfoto">
                  <img
                    src="./src/img/player1_1.jpg"
                    class="gp__main_playerfoto_img"
                  />
                </div>
                <div class="gp__main_playername">Ярослав</div>
                <div class="gp__main_playersign">
                  <div class="gp__main_playersign_body">X</div>
                </div>
                <div class="gp__main_playerscores">
                  <ul class="gp__main_playerscores_list">
                    <li>Побед: 1</li>
                    <li>Поражений: 2</li>
                    <li>Ничьих: 10</li>
                  </ul>
                </div>
              </div>

              <div class="gp__main_field">
                <div class="gp__main_field_column">
                  <div class="gp__main_field_item noborder-left noborder-top">
                    X
                  </div>
                  <div class="gp__main_field_item noborder-left">O</div>
                  <div
                    class="gp__main_field_item noborder-left noborder-bottom"
                  >
                    X
                  </div>
                </div>
                <div class="gp__main_field_column">
                  <div class="gp__main_field_item noborder-top">X</div>
                  <div class="gp__main_field_item selectable"></div>
                  <div
                    class="gp__main_field_item noborder-bottom selectable"
                  ></div>
                </div>
                <div class="gp__main_field_column">
                  <div
                    class="gp__main_field_item 
                          noborder-top 
                          noborder-right selectable"
                  ></div>
                  <div
                    class="gp__main_field_item noborder-right selectable"
                  ></div>
                  <div
                    class="gp__main_field_item 
                          noborder-right 
                          noborder-bottom 
                          selectable"
                  ></div>
                </div>
              </div>

              <div class="gp__main_playerinfo gp__main_playerinfo_player2">
                <div class="gp__main_playerfoto">
                  <img
                    src="./src/img/player2_2.jpg"
                    class="gp__main_playerfoto_img"
                  />
                </div>
                <div class="gp__main_playername">Радислав</div>
                <div class="gp__main_playersign">
                  <div class="gp__main_playersign_body">O</div>
                </div>
                <div class="gp__main_playerscores">
                  <ul class="gp__main_playerscores_list">
                    <li>Побед: 5</li>
                    <li>Поражений: 2</li>
                    <li>Ничьих: 10</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gp__footer">
          <div class="container">
            <div class="gp__footer_row">
              <button class="gp__footer_button">
                Сохранить и продолжить позже
              </button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}
