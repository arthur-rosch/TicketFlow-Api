import { Prisma,Show } from '@prisma/client'

export interface ShowRepository {
  create(data: Prisma.ShowCreateInput): Promise<Show>
  findById(id: string): Promise<Show | null>
  findByName(name: string): Promise<Show | null>
  findByCategory(category: string): Promise<Show | null>
}