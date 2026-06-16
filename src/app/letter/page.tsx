"use client";
import React from "react";
import "@/components/Letter/letter.css";
import LetterForm from "@/components/Letter/LetterForm";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Letter from "@/components/Letter/Letter";
import "@/components/Letter/letter.css";
import useLetter from "@/lib/letter/uesLetter";
import {  useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setShowLetter } from "@/store/letterSlice";

const LetterPage: React.FC = () => {
  const {showLetter} = useSelector((state:RootState)=>state.letter);

  return (
    <div>
      <div className="container mx-auto w-full relative ">
        <div className="print:hidden flex flex-wrap">
          <LetterForm />
        </div>

        {showLetter && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-screen h-screen  bg-background z-40 pb-20"
          >
            <Letter />

            <Button
              variant={"secondary"}
              onClick={() => setShowLetter(false)}
              className="print:hidden absolute "
            >
              <ArrowLeft />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default useLetter(LetterPage);