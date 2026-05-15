import type {
  CreateGreetingInput,
  CreateGreetingResult,
  GetGreetingInput,
  GetGreetingResult,
  ListGreetingsInput,
  ListGreetingsResult,
  UpdateGreetingInput,
  UpdateGreetingResult,
} from "./types";

export interface StarterRepository {
  createGreeting(input: CreateGreetingInput): Promise<CreateGreetingResult>;
  getGreeting(input: GetGreetingInput): Promise<GetGreetingResult>;
  listGreetings(input: ListGreetingsInput): Promise<ListGreetingsResult>;
  updateGreeting(input: UpdateGreetingInput): Promise<UpdateGreetingResult>;
}
