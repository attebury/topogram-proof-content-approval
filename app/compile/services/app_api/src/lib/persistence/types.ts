export interface CreateGreetingInput {
  message: string;
}

export interface CreateGreetingResult {
  id: string;
  message: string;
  created_at: string;
}

export interface GetGreetingInput {
  greeting_id: string;
}

export interface GetGreetingResult {
  id: string;
  message: string;
  created_at: string;
}

export interface ListGreetingsInput {
  after?: string;
  limit?: number;
}

export interface ListGreetingsResultItem {
  id: string;
  message: string;
  created_at: string;
}

export interface ListGreetingsResult {
  items: ListGreetingsResultItem[];
  next_cursor: string;
}

export interface UpdateGreetingInput {
  greeting_id: string;
  message?: string;
}

export interface UpdateGreetingResult {
  id: string;
  message: string;
  created_at: string;
}
