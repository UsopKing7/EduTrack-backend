import { app } from './server'
import { PORT } from './shared/config/env'
import { checkConnection } from './shared/config/db'
import { checkConnectionRedis } from './shared/config/redis'

checkConnection()
checkConnectionRedis()

app.listen(PORT, () => {
  console.table({
    'API': `http://localhost:${PORT}`
  })
})
