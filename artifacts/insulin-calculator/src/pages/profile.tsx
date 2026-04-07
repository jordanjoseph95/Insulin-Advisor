import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useGetProfile, useUpdateProfile, getGetProfileQueryKey } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";
import { useEffect } from "react";

const profileSchema = z.object({
  carbRatio: z.coerce.number().min(1, "Must be at least 1"),
  correctionFactor: z.coerce.number().min(0.1, "Must be at least 0.1"),
  targetBg: z.coerce.number().min(3, "Must be at least 3.0 mmol/L"),
});

export default function ProfilePage() {
  const { data: profile, isLoading } = useGetProfile();
  const updateProfile = useUpdateProfile();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      carbRatio: 10,
      correctionFactor: 2.5,
      targetBg: 5.5,
    },
  });

  useEffect(() => {
    if (profile) {
      form.reset({
        carbRatio: profile.carbRatio,
        correctionFactor: profile.correctionFactor,
        targetBg: profile.targetBg,
      });
    }
  }, [profile, form]);

  const onSubmit = (values: z.infer<typeof profileSchema>) => {
    updateProfile.mutate(
      { data: values },
      {
        onSuccess: (data) => {
          queryClient.setQueryData(getGetProfileQueryKey(), data);
          toast({
            title: "Settings saved",
            description: "Your insulin settings have been updated.",
          });
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Failed to save settings. Please try again.",
            variant: "destructive",
          });
        }
      }
    );
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-1/3 mb-8" />
        <Skeleton className="h-24 w-full rounded-xl" />
        <Skeleton className="h-24 w-full rounded-xl" />
        <Skeleton className="h-24 w-full rounded-xl" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-medium tracking-tight mb-2">Insulin Settings</h1>
        <p className="text-muted-foreground">Adjust the values used to calculate your doses.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          
          <Card className="p-5 border-none shadow-sm bg-white">
            <FormField
              control={form.control}
              name="carbRatio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">Carb Ratio</FormLabel>
                  <FormDescription className="text-sm pb-2">
                    How many grams of carbs 1 unit of insulin covers.
                  </FormDescription>
                  <div className="flex items-center gap-3">
                    <FormControl>
                      <Input type="number" inputMode="decimal" className="w-24 text-lg" {...field} />
                    </FormControl>
                    <span className="text-muted-foreground">g / unit</span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>

          <Card className="p-5 border-none shadow-sm bg-white">
            <FormField
              control={form.control}
              name="correctionFactor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">Correction Factor</FormLabel>
                  <FormDescription className="text-sm pb-2">
                    How much 1 unit of insulin lowers your blood sugar.
                  </FormDescription>
                  <div className="flex items-center gap-3">
                    <FormControl>
                      <Input type="number" inputMode="decimal" className="w-24 text-lg" {...field} />
                    </FormControl>
                    <span className="text-muted-foreground">mmol/L / unit</span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>

          <Card className="p-5 border-none shadow-sm bg-white">
            <FormField
              control={form.control}
              name="targetBg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">Target Blood Glucose</FormLabel>
                  <FormDescription className="text-sm pb-2">
                    Your ideal blood sugar level.
                  </FormDescription>
                  <div className="flex items-center gap-3">
                    <FormControl>
                      <Input type="number" step="0.1" inputMode="decimal" className="w-24 text-lg" {...field} />
                    </FormControl>
                    <span className="text-muted-foreground">mmol/L</span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>

          <Button 
            type="submit" 
            className="w-full h-12 rounded-xl text-base shadow-md mt-4"
            disabled={updateProfile.isPending || !form.formState.isDirty}
          >
            {updateProfile.isPending ? "Saving..." : "Save Settings"}
            {!updateProfile.isPending && form.formState.isDirty && <Check className="ml-2 h-4 w-4" />}
          </Button>

        </form>
      </Form>
    </div>
  );
}
