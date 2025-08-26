import { app } from './server'
import { PORT } from './shared/config/env'
import { checkConnection } from './shared/config/db'

checkConnection()

app.listen(PORT, () => {
  console.table({
    'API': `http://localhost:${PORT}`
  })
})
