import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
  names,
  starWars,
} from 'unique-names-generator'

import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient().$extends({
  result: {
    monster: {
      type: {
        // the dependencies
        needs: {
          subSpecie: {
            needs: {
              specie: true,
            },
          },
        },
        compute(monster) {
          // the computation logic
          console.log('monster :', monster)
          return {
            specie: monster.subSpecie.specie.name,
            subSpecie: monster.subSpecie.name,
          }
        },
      },
    },
  },
})
const filterMonster = (monster) => {
  delete monster['subSpecie']
  delete monster['subSpecieId']
  return monster
}
export const createMonster = async (req, res) => {
  const { level, name, subSpecieId } = req.body
  try {
    const monsterCreated = await prisma.monster.create({
      data: {
        name,
        level,
        subSpecieId,
      },
      include: {
        subSpecie: {
          include: {
            specie: true,
          },
        },
      },
    })
    console.log('monsterCreated :', monsterCreated)
    delete monsterCreated['subSpecie']
    delete monsterCreated['subSpecieId']
    res.json(monsterCreated)
  } catch (err) {
    console.log('err :', err)
    res.status(500).json({ error: 'Server error', message: err.message })
  }
}

export const getMonsters = async (req, res) => {
  try {
    const { limit, skip } = req.query
    const [result, count] = await prisma.$transaction([
      prisma.monster.findMany({
        include: {
          subSpecie: {
            include: {
              specie: true,
            },
          },
        },
        skip: parseInt(skip),
        take: parseInt(limit),
      }),
      prisma.monster.count({}),
    ])
    console.log('result :', result)
    console.log('count :', count)
    res.json({ monsters: result.map(filterMonster), count })
  } catch (err) {
    console.log('err :', err)
    res.status(500).json({ error: 'Server error', message: err.message })
  }
}

export const randomMonsterGenerator = async (req, res) => {
  try {
    let { size } = req.body
    const species = await prisma.specie.findMany({
      include: {
        subSpecies: true,
      },
    })
    console.log('species :', species)
    let subSpecies = []
    species.map((specie) => specie.subSpecies.map((i) => subSpecies.push(i)))
    const monsters = []
    while (size > 0) {
      const randomElement =
        subSpecies[Math.floor(Math.random() * subSpecies.length)]
      console.log('randomElement :', randomElement)
      const config = {
        dictionaries: [
          [randomElement.name],
          adjectives,
          colors,
          animals,
          names,
          starWars,
        ],
        length: 3,
        separator: ' ',
        style: 'capital',
      }
      const name = uniqueNamesGenerator(config)
      console.log('name :', name)
      monsters.push({
        name,
        level: Math.floor(Math.random() * 1000),
        subSpecieId: randomElement.id,
      })
      size--
    }
    const result = []
    for (const monster of monsters) {
      const monsterCreated = await prisma.monster.create({
        data: monster,
        include: {
          subSpecie: {
            include: {
              specie: true,
            },
          },
        },
      })
      console.log('monsterCreated :', monsterCreated)
      result.push(monsterCreated)
    }
    console.log('result :', result)

    res.json({ monsters: result.map(filterMonster) })
  } catch (err) {
    console.log('err :', err)
    res.status(500).json({ error: 'Server error', message: err.message })
  }
}

export const deleteMonster = async (req, res) => {
  const { id } = req.params

  try {
    await prisma.monster.delete({
      where: {
        id,
      },
    })

    res.json('deleted')
    console.log(id)
  } catch (err) {
    console.log('err :', err)
    res.status(500).json({ error: 'Server error', message: err.message })
  }
}
