import { prisma } from '@/lib/prisma'
import { Category, Prisma } from '@prisma/client'
import { ShowRepository } from '../show-repository'
import { GetResult } from '@prisma/client/runtime'

export class PrismaShowRepository implements ShowRepository {
  async create(data: Prisma.ShowCreateInput) {
    const show = await prisma.show.create({
      data,
    })

    return show
  }
  async findMany() {
    const shows = await prisma.show.findMany()

    if(!shows) return null

    return shows
  }

  async findById(id: string) {
    const show = await prisma.show.findUnique({
      where: {
        id
      }
    })
    if(!show) return null

    return show
  }
  async findByName(name: string) {
    const show = await prisma.show.findFirst({
      where: {
        name,
      }
    })
    if(!show) return null

    return show
  }
  async findManyByCategory(category: Category) {
    const shows = await prisma.show.findMany({
      where: {
        category,
      }
    })

    if(!shows) return null

    return shows
  }
}