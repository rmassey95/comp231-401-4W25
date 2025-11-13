import { Separator } from "@/components/ui/separator";

import { Info } from "../_components/info";

const BillingPage = async () => {
  // Billing removed - always show as free
  const isPro = false;

  return (
    <div className="w-full">
      <Info isPro={isPro} />
      <Separator className="my-2" />
      <p className="text-sm text-muted-foreground">
        Billing features have been removed. All features are now available for free.
      </p>
    </div>
  );
};

export default BillingPage;
