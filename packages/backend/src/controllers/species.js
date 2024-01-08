import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getAllSpecies = async (req, res) => {
    try {
        const species = await prisma.specie.findMany({
            include: {
                subSpecies: {
                    select: {
                        name: true,
                        id: true
                    }
                },
            }
        })
        res.json(species)
    } catch (err) {
        console.log('err :', err)
        res.status(500).json({ error: 'Server error', message: err.message })
    }
}
