import { Router } from 'express'
import { getAllSpecies } from '../controllers/species'


export const species = () => {
    const species = Router()
    species.get('/', getAllSpecies)
    return species
}
