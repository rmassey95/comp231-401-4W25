"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="aspect-video relative flex items-center justify-center">
          <Image src="/hero.svg" alt="Hero" className="object-cover" fill />
        </div>
        <div className="text-neutral-700 mx-auto space-y-6 p-6">
          <h2 className="font-semibold text-xl">
            All Features Available!
          </h2>
          <p className="text-xs font-semibold text-neutral-600">
            All MyTracker features are now available for free
          </p>
          <div className="pl-3">
            <ul className="text-sm list-disc">
              <li>Unlimited boards</li>
              <li>Advanced checklists</li>
              <li>All features unlocked</li>
              <li>No payment required!</li>
            </ul>
          </div>
          <Button
            onClick={proModal.onClose}
            className="w-full"
            variant="primary"
          >
            Got it
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
