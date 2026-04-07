import { Info } from "lucide-react";

export function MedicalDisclaimer() {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 text-secondary-foreground text-sm">
      <Info className="h-5 w-5 shrink-0 text-primary mt-0.5" />
      <div className="leading-relaxed">
        <p className="font-medium mb-1">Medical Disclaimer</p>
        <p className="opacity-90">
          This calculator is a tool, not medical advice. Always confirm your dose with your healthcare provider and check your blood glucose regularly.
        </p>
      </div>
    </div>
  );
}
