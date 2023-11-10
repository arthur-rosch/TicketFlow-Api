import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { UserRepository } from '../user-repository'
import { GetResult } from '@prisma/client/runtime'

export class PrismaUserRepository implements UserRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        Ticket: true
      }
    })

    if (!user) return null

    return user
  }

  async findByEmail(email: string){
    const user = await prisma.user.findUnique({
      where: {
         email,
      }
    })

    if (!user) return null

    return user
  }
}