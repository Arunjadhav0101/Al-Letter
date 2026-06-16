"use client";

import {
  Edit2,
  ImportIcon as Export,
  Layout,
  MailPlusIcon,
  Printer,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LetterEditForm from "../Letter/EditLetter";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { cn } from "@/lib/utils";
import { LetterType } from "../Letter/LetterType";
import sendEmail from "@/lib/letter/sendEmail";
export default function LetterEditorNav({
  toPDF,
  setFormat,
  className,
}: {
  toPDF: () => void;
  className?: string;
  setFormat: (format: "format1" | "format2") => void;
}) {
  const letterState = useSelector((state: RootState) => state.letter);
  return (
    <div className={cn("container w-full md:w-5/6  mx-auto md:rounded-lg flex items-center fixed bottom-0 md:bottom-2 left-0 right-0 z-50 border border-input shadow-md print:hidden h-[60px] bg-background/40 backdrop-blur-sm", className)}>
      {/* Mobile Vertical Nav */}

      <nav className=" w-full print:hidden">
        <div className="flex md:justify-center items-center overflow-x-auto scrollbar- scrollbar-thumb-gray-400 scrollbar-track-gray-200 gap-4 p-2">
          <Button
            variant="ghost"
            
            className=""
            onClick={() => toPDF()}
          >
            <Export className="h-4 w-4" />
            Export
          </Button>
          <Dialog>
            <DialogTrigger className="inline-flex text-xs items-center py-3 px-4  gap-2 hover:bg-black/20 rounded-md">
              <Edit2 className="h-4 w-4" /> Edit
            </DialogTrigger>
            <DialogContent className="overflow-y-auto h-full md:max-h-[500px]">
              <DialogHeader>
                <DialogTitle>Edit</DialogTitle>

                <LetterEditForm letterData={letterState.letter as LetterType} />
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Button
            variant="default"
            className="font-medium"
            onClick={() => window.print()}
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <Button variant="ghost" className="font-medium" onClick={() => sendEmail(letterState.letter as LetterType)}>
            <MailPlusIcon className="h-4 w-4" />
            Draft an Email
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost"  className="">
                <Layout className="h-4 w-4" />
                Layout
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setFormat("format1")}>
                Format 1
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFormat("format2")}>
                Format 2
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
