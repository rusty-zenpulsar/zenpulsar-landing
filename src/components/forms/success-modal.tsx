"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/constants";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
}

export function SuccessModal({ isOpen, onClose, userEmail }: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full mx-auto">
        <DialogHeader className="flex items-center justify-between pb-4 border-b border-zp-border">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <DialogTitle className="text-2xl font-bold text-zp-dark">
              Thank You!
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="py-6 space-y-6">
          <div className="text-center">
            <p className="text-lg text-zp-dark mb-2">
              Your demo request has been sent successfully!
            </p>
            <p className="text-sm text-zp-gray">
              We&apos;ve received your information and will get back to you soon.
            </p>
          </div>

          <div className="bg-zp-bg-light rounded-lg p-4 space-y-3">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-zp-gray" />
              <div>
                <p className="text-sm font-medium text-zp-dark">What&apos;s next?</p>
                <p className="text-xs text-zp-gray">
                  Our team will review your request and contact you within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-zp-gray" />
              <div>
                <p className="text-sm font-medium text-zp-dark">Questions?</p>
                <p className="text-xs text-zp-gray">
                  Reach out to us at{" "}
                  <a 
                    href={`mailto:${siteConfig.links.email}`}
                    className="text-zp-dark hover:underline font-medium"
                  >
                    {siteConfig.links.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {userEmail && (
            <div className="text-center">
              <p className="text-xs text-zp-gray">
                We&apos;ll send updates to <span className="font-medium">{userEmail}</span>
              </p>
            </div>
          )}

          <Button
            onClick={onClose}
            className="w-full"
          >
            Continue Exploring
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 