"use client";

import { Button } from "@/components/ui/button";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  return (
    <Button variant="primary" disabled>
      {isPro ? "Manage subscription" : "All features are free"}
    </Button>
  );
};
