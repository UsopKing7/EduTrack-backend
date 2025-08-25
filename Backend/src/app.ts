import { app } from './server'
import { PORT } from './shared/constants/env'

app.listen(PORT, () => {
  console.table({
    'API': `http://localhost:${PORT}`
  })
})
