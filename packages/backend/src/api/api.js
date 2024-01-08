import { version } from '../../package.json'
import { Router } from 'express'

// Routes
import { species } from './specie'
import { monsters } from './monster'

export const api = () => {
  const api = Router()

  api.use('/species', species())
  api.use('/monsters', monsters())

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version })
  })

  return api
}
