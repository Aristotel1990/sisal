import { Router } from 'express'
import {
  createMonster,
  getMonsters,
  randomMonsterGenerator,
  deleteMonster,
} from '../controllers/monster'

export const monsters = () => {
  const monsters = Router()
  monsters.post('/', createMonster)
  monsters.get('/', getMonsters)
  monsters.post('/random', randomMonsterGenerator)
  monsters.delete('/:id', deleteMonster)

  return monsters
}
