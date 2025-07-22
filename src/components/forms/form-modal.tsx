"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DemoForm } from "./demo-form";
import { DemoFormData } from "@/lib/types";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "demo";
  onDemoSubmit: (data: DemoFormData) => Promise<void>;
}

export function FormModal({
  isOpen,
  onClose,
  onDemoSubmit,
}: FormModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full mx-auto">
        <DialogHeader className="flex items-center justify-between pb-4 border-b border-zp-border">
          <DialogTitle className="text-2xl font-bold text-zp-dark">
            Request Demo
          </DialogTitle>
        </DialogHeader>

        <div className="py-2">
          <DemoForm onSubmit={onDemoSubmit} onCancel={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
} 