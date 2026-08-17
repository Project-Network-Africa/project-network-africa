import { Conversation } from "@/src/components/portal/shared/Messages/messages.types";

const STORAGE_KEY = "pna2-conversations";

export function getStoredConversations(
  initialConversations: Conversation[],
): Conversation[] {
  if (typeof window === "undefined") {
    return initialConversations;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(initialConversations),
    );

    return initialConversations;
  }

  try {
    return JSON.parse(stored) as Conversation[];
  } catch {
    return initialConversations;
  }
}

export function saveConversations(conversations: Conversation[]): void {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));

  // Notify other components/tabs that the data changed.
  window.dispatchEvent(new Event("messages-updated"));
}
