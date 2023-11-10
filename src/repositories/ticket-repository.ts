import { Prisma, Ticket, TicketType } from '@prisma/client'

export interface CreateShow {
    price: number;
    qrCode: string;
    type: TicketType;
    validUntil: string | Date;
}

export interface TicketRepository {
  create(data: Prisma.TicketCreateInput, showId: string, userId: string): Promise<Ticket>
  findById(id: string): Promise<Ticket | null>
  isTicketValid(id: string): Promise<Boolean | null>
}