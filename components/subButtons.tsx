'use client';

import { ArrowRight } from "lucide-react";
import { Button } from "./button";


export function RequestDemoButton() {
    return (
                        <Button onClick={() => {}} size="lg" className="bg-linear-to-r from-[#1F8A34] to-emerald-700 hover:from-[#1a7029] hover:to-emerald-800 text-white shadow-xl shadow-emerald-200 h-12 px-8 text-base">
 Request Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
    )
}

export function ViewElementButton({ elementId, label }: { elementId: string, label: string }) {
    return (
        <Button onClick={() => document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth", })} variant="ghost" className="text-neutral-700 hover:text-[#1F8A34] hover:bg-emerald-50">{label}</Button>
    )
}