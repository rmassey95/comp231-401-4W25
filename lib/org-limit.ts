// Org limit functions removed - no limits enforced
// Using a default orgId for all operations
const DEFAULT_ORG_ID = "default-org";

export const incrementAvailableCount = async () => {
  // No-op: limits removed
};

export const decreaseAvailableCount = async () => {
  // No-op: limits removed
};

export const hasAvailableCount = async () => {
  // Always return true - no limits
  return true;
};

export const getAvailableCount = async () => {
  // Return a high number to indicate unlimited
  return 999;
};
