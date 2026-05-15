import { Hono } from "hono";
import { cors } from "hono/cors";
import type { Context } from "hono";
import { serverContract } from "../topogram/server-contract";
import { HttpError, coerceValue, contentDisposition, jsonError, requireHeaders, requireRequestFields } from "./helpers";
import type { ServerDependencies } from "./context";
import type { CreateGreetingInput, CreateGreetingResult, GetGreetingInput, GetGreetingResult, ListGreetingsInput, ListGreetingsResult, ListGreetingsResultItem, UpdateGreetingInput, UpdateGreetingResult } from "../persistence/types";

function buildInput(c: Context, route: any, body: Record<string, unknown>) {
  const input: Record<string, unknown> = {};
  for (const field of (route.requestContract?.transport.path || []) as any[]) input[field.name] = coerceValue(c.req.param(field.transport.wireName), field.schema);
  for (const field of (route.requestContract?.transport.query || []) as any[]) input[field.name] = coerceValue(c.req.query(field.transport.wireName), field.schema);
  for (const field of (route.requestContract?.transport.header || []) as any[]) input[field.name] = coerceValue(c.req.header(field.transport.wireName), field.schema);
  for (const field of (route.requestContract?.transport.body || []) as any[]) {
    const defaultValue = field.schema && typeof field.schema === "object" && "default" in field.schema ? field.schema.default : undefined;
    input[field.name] = body[field.transport.wireName] ?? defaultValue;
  }
  return input;
}

function corsOrigin(origin: string) {
  const configured = process.env.TOPOGRAM_CORS_ORIGINS || "http://localhost:5173,http://127.0.0.1:5173";
  const allowed = new Set(configured.split(",").map((entry) => entry.trim()).filter(Boolean));
  return allowed.has(origin) ? origin : "";
}

export function createApp(deps: ServerDependencies) {
  const app = new Hono();
  app.use("*", cors({ origin: corsOrigin, allowMethods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"], allowHeaders: ["Content-Type", "If-Match", "If-None-Match", "Idempotency-Key", "Authorization"], exposeHeaders: ["ETag", "Location", "Retry-After", "Content-Disposition"] }));
  app.get("/health", (c) => c.json({ ok: true, service: "topogram-starter-server" }, 200 as any));
  app.get("/ready", async (c) => { try { await deps.ready?.(); return c.json({ ok: true, ready: true, service: "topogram-starter-server" }, 200 as any); } catch (error) { const message = error instanceof Error ? error.message : "Readiness check failed"; return c.json({ ok: false, ready: false, service: "topogram-starter-server", message }, 503 as any); } });

  const route0 = serverContract.routes[0]!;
  app.post(route0.path, async (c) => {
    try {
      const body = await c.req.json().catch(() => ({}));
      const input = buildInput(c, route0, body);
      requireRequestFields(route0, input);
      const result = await deps.starterRepository.createGreeting(input as unknown as CreateGreetingInput);
      return c.json(result as CreateGreetingResult, 201 as any);
    } catch (error) { const failure = jsonError(error); return c.json(failure.body, failure.status as any); }
  });
  const route1 = serverContract.routes[1]!;
  app.get(route1.path, async (c) => {
    try {
      const body = {};
      const input = buildInput(c, route1, body);
      requireRequestFields(route1, input);
      const result = await deps.starterRepository.getGreeting(input as unknown as GetGreetingInput);
      return c.json(result as GetGreetingResult, 200 as any);
    } catch (error) { const failure = jsonError(error); return c.json(failure.body, failure.status as any); }
  });
  const route2 = serverContract.routes[2]!;
  app.get(route2.path, async (c) => {
    try {
      const body = {};
      const input = buildInput(c, route2, body);
      requireRequestFields(route2, input);
      const result = await deps.starterRepository.listGreetings(input as unknown as ListGreetingsInput);
      return c.json(result as ListGreetingsResult, 200 as any);
    } catch (error) { const failure = jsonError(error); return c.json(failure.body, failure.status as any); }
  });
  const route3 = serverContract.routes[3]!;
  app.patch(route3.path, async (c) => {
    try {
      const body = await c.req.json().catch(() => ({}));
      const input = buildInput(c, route3, body);
      requireRequestFields(route3, input);
      const result = await deps.starterRepository.updateGreeting(input as unknown as UpdateGreetingInput);
      return c.json(result as UpdateGreetingResult, 200 as any);
    } catch (error) { const failure = jsonError(error); return c.json(failure.body, failure.status as any); }
  });
  return app;
}

export type AppType = ReturnType<typeof createApp>;
