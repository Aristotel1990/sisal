const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const species = [
  {
    name: 'Lumirex',
    subspecies: ['Lumifex', 'Gloremax', 'Gloriom', 'Luminex'],
  },
  {
    name: 'Zephyrians',
    subspecies: ['Aerians', 'Aerialans', 'Aerielins', 'Aerielsolin'],
  },
  {
    name: 'Vylorians',
    subspecies: [
      'Styldonians',
      'Vytlarians',
      'Sytlarians',
      'Stylians',
      'Stylossians',
      'Styndorians',
    ],
  },
  {
    name: 'Earth Monster',
    subspecies: [
      'Djinn',
      'Mermaid',
      'Witch',
      'Octopus',
      'Draugr',
      'Pixie',
      'Slug',
      'Geiffon',
      'Chimera',
      'Fairy',
    ],
  },
  {
    name: 'Dylorians',
    subspecies: [
      'Steamfoot',
      'Shadeface',
      'Stonefreak',
      'Decayfang',
      'The Hungry Wraith',
      'The Acidic Brute',
      'The Greedy Child',
      'The Taloned Razor Serpent',
      'The Onyx Cave Bison',
      'The Rabid Moon Bull',
    ],
  },
]

async function main() {
  await prisma.monster.deleteMany({})

  await prisma.subSpecie.deleteMany({})
  await prisma.specie.deleteMany({})

  for (const specie of species) {
    const specieResult = await prisma.specie.create({
      data: {
        name: specie.name,
      },
    })
    console.log('specieResult :', specieResult)
    const subSpecies = specie.subspecies.map((name) => ({
      name,
      specieId: specieResult.id,
    }))
    console.log('subSpecies :', subSpecies)
    await prisma.subSpecie.createMany({
      data: subSpecies,
    })
  }
  const result = await prisma.subSpecie.findMany()
  console.log('result :', result)
}

main()
  // catch any erroes
  .catch(console.error)
  // disconnect the prisma client once all processes are executed
  .finally(() => prisma.$disconnect())
