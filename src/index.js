import '@/scss/index.scss'

import {Router} from '@core/Router/Router'
import {MainPage} from '@/pages/MainPage'
import {GamePage} from '@/pages/GamePage'
import {RecordsPage} from '@/pages/RecordsPage'


new Router('#app', {
  main: MainPage,
  game: GamePage,
  records: RecordsPage
})
