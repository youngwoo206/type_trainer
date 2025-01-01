"use client";

import { useState, useEffect } from "react";
import generateTest from "@/utils/generateTest";

export default function Home() {
  const [testText, setTestText] = useState<string[]>([]);

  useEffect(() => {
    generateNewTest();
  }, []);

  const generateNewTest = () => {
    const text = generateTest(500);
    setTestText(text);
  };

  return <div>{testText}</div>;
}
