import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCalculateDose, useGetProfile } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Droplets, Utensils, AlertTriangle, ArrowRight } from "lucide-react";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import type { DoseResult } from "@workspace/api-client-react/src/generated/api.schemas";

const formSchema = z.object({
  carbs: z.coerce.number().min(0, "Carbs must be 0 or more"),
  currentBg: z.coerce.number().min(1, "Please enter a valid BG level"),
});

export default function HomePage() {
  const { data: profile, isLoading: isProfileLoading } = useGetProfile();
  const calculateDose = useCalculateDose();
  const [result, setResult] = useState<DoseResult | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      carbs: 0,
      currentBg: 5.5,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    calculateDose.mutate(
      { data: values },
      {
        onSuccess: (data) => {
          setResult(data);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
      }
    );
  };

  if (isProfileLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-32 w-full rounded-2xl" />
        <Skeleton className="h-64 w-full rounded-2xl" />
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {result ? (
        <Card className="overflow-hidden border-none shadow-lg bg-white relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-muted-foreground font-medium text-sm mb-1 uppercase tracking-wider">Recommended Dose</h2>
              <div className="text-6xl font-light text-foreground tracking-tight">
                {result.totalDose}<span className="text-2xl text-muted-foreground ml-1">u</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Utensils className="h-4 w-4" />
                  <span>Carb Dose</span>
                </div>
                <span className="font-medium">{result.carbDose} u</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Droplets className="h-4 w-4" />
                  <span>Correction Dose</span>
                </div>
                <span className="font-medium">{result.correctionDose} u</span>
              </div>
            </div>

            {result.isCapped && (
              <div className="mt-4 flex items-start gap-2 p-3 bg-orange-50 text-orange-800 rounded-lg text-sm">
                <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5 text-orange-600" />
                <p>Safety limit reached. Dose was capped at 30 units.</p>
              </div>
            )}

            <Button 
              variant="outline" 
              className="w-full mt-6 h-12 rounded-xl"
              onClick={() => {
                setResult(null);
                form.reset();
              }}
            >
              Calculate Another Dose
            </Button>
          </div>
        </Card>
      ) : (
        <>
          <div className="mb-8">
            <h1 className="text-3xl font-medium tracking-tight mb-2">Ready to dose?</h1>
            <p className="text-muted-foreground">Enter your current numbers below.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Card className="p-1 shadow-sm border-none bg-card/50 ring-1 ring-border/50">
                <FormField
                  control={form.control}
                  name="currentBg"
                  render={({ field }) => (
                    <FormItem className="p-4 bg-white rounded-[10px] shadow-sm mb-1">
                      <FormLabel className="text-muted-foreground flex items-center gap-2">
                        <Droplets className="h-4 w-4" />
                        Current Blood Glucose
                      </FormLabel>
                      <div className="flex items-end gap-2 pt-2">
                        <FormControl>
                          <Input 
                            type="number" 
                            step="0.1"
                            inputMode="decimal"
                            className="text-3xl font-light h-auto py-2 border-none shadow-none px-0 focus-visible:ring-0 w-24" 
                            {...field} 
                          />
                        </FormControl>
                        <span className="text-muted-foreground font-medium pb-3">mmol/L</span>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="carbs"
                  render={({ field }) => (
                    <FormItem className="p-4 bg-white rounded-[10px] shadow-sm">
                      <FormLabel className="text-muted-foreground flex items-center gap-2">
                        <Utensils className="h-4 w-4" />
                        Carbs to Eat
                      </FormLabel>
                      <div className="flex items-end gap-2 pt-2">
                        <FormControl>
                          <Input 
                            type="number" 
                            inputMode="numeric"
                            className="text-3xl font-light h-auto py-2 border-none shadow-none px-0 focus-visible:ring-0 w-24" 
                            {...field} 
                          />
                        </FormControl>
                        <span className="text-muted-foreground font-medium pb-3">grams</span>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>

              <Button 
                type="submit" 
                className="w-full h-14 rounded-xl text-base shadow-lg shadow-primary/20"
                disabled={calculateDose.isPending}
              >
                {calculateDose.isPending ? "Calculating..." : "Calculate Dose"}
                {!calculateDose.isPending && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </Form>
        </>
      )}

      <div className="pt-4">
        <MedicalDisclaimer />
      </div>
    </div>
  );
}
