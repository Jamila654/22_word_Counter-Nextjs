"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import React from "react";

export default function WordCounter() {
  const [text, setText] = useState<string>("");

  const handleClear = () => {
    setText("");
  };

  const wordCount = text
    .trim()
    .split(" ")
    .filter((word) => word).length;

  const charCount = text.length;

  return (
    <div className="min-h-screen bg-blue-300 flex items-center justify-center">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Word Counter</CardTitle>
          <CardDescription>Enter text and see the word and character count.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Textarea
            placeholder="Enter Your Text Here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={8}
          />
          <div className="buttons w-full flex items-center justify-between">
            <Button className="bg-red-700 hover:bg-red-500 font-bold w-full" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
          <p>{wordCount} Words</p>
          <p>{charCount} Characters</p>
        </CardFooter>
      </Card>
    </div>
  );
}
