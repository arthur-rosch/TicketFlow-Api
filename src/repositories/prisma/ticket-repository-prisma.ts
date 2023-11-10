import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { TicketRepository, CreateShow } from '../ticket-repository'

export class PrismaTicketRepository implements TicketRepository {
  async create(data: CreateShow, showId: string, userId: string) {
    const {price, qrCode, type, validUntil} = data
    const ticket = await prisma.ticket.create({
      data: {
        type,
        price,
        qrCode,
        userId,
        showId,
        validUntil,
      }
    })

    return ticket
  }

  async findById(id: string) {
    const ticket = await prisma.ticket.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        show: true
      }
    })

    if (!ticket) return null

    return ticket
  }

  async isTicketValid(id: string){
    const ticket = await prisma.ticket.findUnique({
      where: {
         id,
      }
    })

    if (!ticket) return null

    const { validUntil } = ticket

    if(validUntil > new Date()) return false

    return true
  }
}