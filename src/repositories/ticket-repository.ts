import { Prisma, Ticket } from '@prisma/client'

export interface TicketRepository {
  create(data: Prisma.TicketCreateInput): Promise<Ticket>
  findById(id: string): Promise<Ticket | null>
  isTicketValid(id: string): Promise<Ticket | null>
}