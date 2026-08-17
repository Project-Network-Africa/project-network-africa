import { SavedCandidate } from "@/src/components/portal/employer/(saved-candidates)/candidates.types";

export function saveCandidate(candidate: SavedCandidate) {
  console.log("Saving candidate:", candidate);

  // Later:
  // POST /api/employer/saved-candidates
}

export function removeSavedCandidate(candidateId: string) {
  console.log("Removing candidate:", candidateId);

  // Later:
  // DELETE /api/employer/saved-candidates/:id
}
