import '@/scss/index.scss'

import {Router} from '@core/Router/Router'
import {MainPage} from '@/pages/MainPage'
import {GamePage} from '@/pages/GamePage'

new Router('#app', {
  main: MainPage,
  game: GamePage,
})
