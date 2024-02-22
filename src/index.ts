import 'dotenv/config'
import app from './app'

const port = process.env.PORT || 3100

app.listen(port, () => console.log(`App ready on port: ${port}`))
