/* eslint-disable no-unused-vars */
import 'dotenv/config'
import app from './server'
import { PORT } from './config/env'
import logger from './lib/logger'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const init = async () => {

  app.server.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${app.server.address().port}`,
    )
  })

  process.on('SIGINT', async () => {
    await app.server.close(async () => {
      await prisma.$disconnect()
      logger.info('Closing server')
    })
  })

  process.on('SIGTERM', async () => {
    await app.server.close(async () => {
      await prisma.$disconnect()
      console.log('Process terminated')
    })
  })
}
init().then()
