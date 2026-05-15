import { PrismaClient } from "@prisma/client";
import type { StarterRepository } from "../repositories";
import type {
  CreateGreetingInput,
  CreateGreetingResult,
  GetGreetingInput,
  GetGreetingResult,
  ListGreetingsInput,
  ListGreetingsResult,
  UpdateGreetingInput,
  UpdateGreetingResult,
} from "../types";

import { HttpError } from "../../server/helpers";


function iso(value: Date | string | null | undefined): string | undefined {
  if (!value) return undefined;
  return value instanceof Date ? value.toISOString() : value;
}

function nextCursor<T extends { created_at: Date | string }>(items: T[]): string {
  return items.length > 0 ? iso(items[items.length - 1]!.created_at) || "" : "";
}

function mapGreetingRecord(greeting: {
  id: string;
  message: string;
  created_at: Date | string;
}): GetGreetingResult {
  return {
    id: greeting.id,
    message: greeting.message,
    created_at: iso(greeting.created_at)!
  };
}

export class PrismaStarterRepository implements StarterRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async getGreeting(input: GetGreetingInput): Promise<GetGreetingResult> {
    const greeting = await this.prisma.greeting.findUnique({ where: { id: input.greeting_id } });
    if (!greeting) throw new HttpError(404, "cap_get_greeting_not_found", "Greeting not found");
    return mapGreetingRecord(greeting);
  }

  async listGreetings(input: ListGreetingsInput): Promise<ListGreetingsResult> {
    const take = Math.min(input.limit ?? 25, 100);
    const greetings = await this.prisma.greeting.findMany({
      where: { ...(input.after ? { created_at: { lt: new Date(input.after) } } : {}) },
      orderBy: [{ created_at: "desc" }],
      take: take + 1
    });
    const page = greetings.slice(0, take).map(mapGreetingRecord);
    return {
      items: page,
      next_cursor: nextCursor(greetings.slice(0, take))
    };
  }

  async createGreeting(input: CreateGreetingInput): Promise<CreateGreetingResult> {
    const greeting = await this.prisma.greeting.create({
      data: {
        id: crypto.randomUUID(),
        message: input.message,
        created_at: new Date()
      }
    });
    return mapGreetingRecord(greeting);
  }

  async updateGreeting(input: UpdateGreetingInput): Promise<UpdateGreetingResult> {
    const greeting = await this.prisma.greeting.update({
      where: { id: input.greeting_id },
      data: {
        ...(input.message !== undefined ? { message: input.message } : {})
      }
    }).catch((error: unknown) => {
      throw new HttpError(404, "cap_get_greeting_not_found", error instanceof Error ? error.message : "Greeting not found");
    });
    return mapGreetingRecord(greeting);
  }
}
