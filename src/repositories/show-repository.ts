import { Prisma,Show } from '@prisma/client'

export interface ShowRepository {
  create(data: Prisma.ShowCreateInput): Promise<Show>
  findMany(): Promise<Show[] | null>
  findById(id: string): Promise<Show | null>
  findByName(name: string): Promise<Show | null>
  findManyByCategory(category: string): Promise<Show[] | null>
}