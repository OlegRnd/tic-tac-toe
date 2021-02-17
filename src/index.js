import '@/scss/index.scss'

import {Router} from '@core/Router/Router'
import {FirstPage} from '@core/pages/FirstPage'
import {GamePage} from '@core/pages/GamePage'

new Router('#app', {
  dashboard: FirstPage,
  excel: GamePage,
})
