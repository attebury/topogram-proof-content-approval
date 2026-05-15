import { env as publicEnv } from "$env/dynamic/public";
import rawApiContracts from "$lib/topogram/api-contracts.json";

type Fetcher = typeof fetch;
type ApiContract = {
  endpoint: { path: string; method?: string };
  requestContract?: { transport?: { path?: Array<{ name: string; transport: { wireName: string } }>; query?: Array<{ name: string; transport: { wireName: string } }> } };
};
const apiContracts = rawApiContracts as Record<string, ApiContract>;

function apiBase() { return publicEnv.PUBLIC_TOPOGRAM_API_BASE_URL || "http://localhost:3000"; }

function buildPath(contract: ApiContract, input: Record<string, unknown>) {
  let path = contract.endpoint.path;
  for (const field of contract.requestContract?.transport?.path || []) {
    path = path.replace(`:${field.transport.wireName}`, encodeURIComponent(String(input[field.name] ?? "")));
  }
  const params = new URLSearchParams();
  for (const field of contract.requestContract?.transport?.query || []) {
    const value = input[field.name];
    if (value !== undefined && value !== null && value !== "") params.set(field.transport.wireName, String(value));
  }
  const query = params.toString();
  return query ? `${path}?${query}` : path;
}

export async function requestCapability(fetcher: Fetcher, capabilityId: string, input: Record<string, unknown> = {}) {
  const contract = apiContracts[capabilityId];
  if (!contract) throw new Error(`Missing API contract for capability: ${capabilityId}`);
  const method = contract.endpoint.method || "GET";
  const headers = new Headers();
  const token = publicEnv.PUBLIC_TOPOGRAM_AUTH_TOKEN || "";
  if (token) headers.set("Authorization", "Bearer " + token);
  let body: string | undefined;
  if (!["GET", "HEAD"].includes(method)) {
    headers.set("Content-Type", "application/json");
    body = JSON.stringify(input);
  }
  const response = await fetcher(new URL(buildPath(contract, input), apiBase()).toString(), { method, headers, body });
  if (!response.ok) throw new Error(`Topogram API request failed: ${response.status}`);
  if (response.status === 204) return null;
  return response.json();
}

export const listGreetings = (fetcher: Fetcher, input: Record<string, unknown> = {}, _options?: unknown) => requestCapability(fetcher, "cap_list_greetings", input);
export const getGreeting = (fetcher: Fetcher, greeting_id: string, _options?: unknown) => requestCapability(fetcher, "cap_get_greeting", { greeting_id });
export const createGreeting = (fetcher: Fetcher, input: Record<string, unknown>, _options?: unknown) => requestCapability(fetcher, "cap_create_greeting", input);
export const updateGreeting = (fetcher: Fetcher, greeting_id: string, input: Record<string, unknown>, _options?: unknown) => requestCapability(fetcher, "cap_update_greeting", { ...input, greeting_id });
export const reloadGreeting = (fetcher: Fetcher, greeting_id: string, input: Record<string, unknown> = {}, _options?: unknown) => requestCapability(fetcher, "cap_get_greeting", { ...input, greeting_id });
