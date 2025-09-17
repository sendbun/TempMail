"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Copy,
  RefreshCw,
  Mail,
  Loader2,
  AlertCircle,
  CheckCircle,
  MoreHorizontal,
  Trash2,
  Inbox,
  Settings,
} from "lucide-react";
import { toast } from "sonner";
import {
  initializeEmailAccount,
  loadEmailData,
  clearEmailData,
  type EmailAccount,
} from "@/lib/email-service";
import Link from "next/link";
import {useTranslations} from 'next-intl'

export function EmailGenerator({ onEmailAccountChange }: { onEmailAccountChange?: () => void }) {
  const tGen = useTranslations('Generator');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);

  // Initialize email account on component mount
  useEffect(() => {
    initializeAccount();
  }, []);

  const initializeAccount = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Check for existing account in localStorage
      const existingData = loadEmailData();
      if (existingData?.currentAccount) {
        const account = existingData.currentAccount;
        setEmail(account.email);
        setPassword(account.password);
        setAccountId(account.id);
        setIsLoading(false);

        toast.success("Email loaded!", {
          description: "Your existing temporary email has been restored.",
        });
        return;
      }

      // Create new account
      const account = await initializeEmailAccount();
      setEmail(account.email);
      setPassword(account.password);
      setAccountId(account.id);

      // Notify parent component about account change
      onEmailAccountChange?.();

      toast.success("Email account created!", {
        description:
          "Your temporary email account has been created successfully.",
      });
    } catch (err) {
      console.error("Error initializing account:", err);
      setError(
        "Email service is currently unavailable. Please try again later."
      );

      // Don't set any mock data, just show error
      setEmail("");
      setPassword("");
      setAccountId(null);

      toast.error("Service Unavailable", {
        description:
          "Email service is currently unavailable. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generateNewAccount = async () => {
    try {
      setIsGenerating(true);
      setError(null);

      toast.info("Generating new email...", {
        description: "Creating a fresh temporary email account.",
      });

      // Clear existing data
      clearEmailData();

      // Create new account
      const account = await initializeEmailAccount();
      setEmail(account.email);
      setPassword(account.password);
      setAccountId(account.id);

      // Notify parent component about account change
      onEmailAccountChange?.();

      toast.success("New email created!", {
        description:
          "A new temporary email account has been generated successfully.",
      });
    } catch (err) {
      console.error("Error generating new account:", err);
      setError(
        "Email service is currently unavailable. Please try again later."
      );

      // Don't set any mock data, just show error
      setEmail("");
      setPassword("");
      setAccountId(null);

      toast.error("Service Unavailable", {
        description:
          "Email service is currently unavailable. Please try again later.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied!", {
      description: "The temporary email has been copied to your clipboard.",
    });
  };

  const deleteAccount = () => {
    clearEmailData();
    setEmail("");
    setPassword("");
    setAccountId(null);
    
    // Notify parent component about account change
    onEmailAccountChange?.();
    
    toast.success("Account deleted!", {
      description: "Your temporary email account has been deleted.",
    });
  };

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600 font-medium text-sm sm:text-base">{tGen('Share')}</span>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-gray-700 h-8 w-8 sm:h-9 sm:w-9"
              disabled
            >
              <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
            </Button>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 mb-4">
            <div className="flex items-center justify-center py-6 sm:py-8">
              <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin text-purple-600" />
            </div>
          </div>

          <div className="flex justify-center gap-2 sm:gap-4 text-xs sm:text-sm flex-wrap">
            <Button
              variant="outline"
              className="text-muted-foreground h-8 px-2 sm:h-9 sm:px-3"
              disabled
            >
              {tGen('Copy')}
            </Button>
            <Button
              variant="outline"
              className="text-muted-foreground h-8 px-2 sm:h-9 sm:px-3"
              disabled
            >
              {tGen('Refresh')}
            </Button>
            <Button
              variant="outline"
              className="text-muted-foreground h-8 px-2 sm:h-9 sm:px-3"
              disabled
            >
              {tGen('Change')}
            </Button>
            <Button
              variant="outline"
              className="text-muted-foreground h-8 px-2 sm:h-9 sm:px-3"
              disabled
            >
              {tGen('Delete')}
            </Button>
            <Button
              variant="outline"
              className="text-muted-foreground h-8 px-2 sm:h-9 sm:px-3"
              disabled
            >
              {tGen('More')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600 font-medium text-sm sm:text-base">
            {tGen('Share')}
          </span>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 mb-4">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span className="font-medium text-sm">Error</span>
            </div>
            <p className="text-sm text-red-600 mt-1">{error}</p>
          </div>
        )}

        {/* Email display area */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 mb-4">
          {email ? (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span className="text-gray-800 font-mono text-xs sm:text-sm break-all">{email}</span>
              <div className="flex gap-2 justify-end sm:justify-start">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 sm:h-9 sm:w-9 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 flex-shrink-0"
                  onClick={copyEmail}
                >
                  <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 sm:h-9 sm:w-9 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 flex-shrink-0"
                  onClick={generateNewAccount}
                  disabled={isGenerating}
                >
                  <RefreshCw
                    className={`h-3 w-3 sm:h-4 sm:w-4 ${isGenerating ? "animate-spin" : ""}`}
                  />
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center py-6 sm:py-8">
              <div className="text-center">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 text-xs sm:text-sm">{tGen('NoEmail')}</p>
                <p className="text-gray-400 text-xs">{tGen('ServiceUnavailable')}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
