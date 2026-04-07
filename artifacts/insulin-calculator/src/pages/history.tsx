import { useListCalculations, useGetCalculationSummary } from "@workspace/api-client-react";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Droplets, Utensils, CalendarDays } from "lucide-react";

export default function HistoryPage() {
  const { data: calculations, isLoading: isCalculationsLoading } = useListCalculations({ limit: 20 });
  const { data: summary, isLoading: isSummaryLoading } = useGetCalculationSummary();

  const isLoading = isCalculationsLoading || isSummaryLoading;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="text-3xl font-medium tracking-tight mb-2">History</h1>
        <p className="text-muted-foreground">Review your past doses and trends.</p>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-32 w-full rounded-xl" />
          <Skeleton className="h-24 w-full rounded-xl" />
          <Skeleton className="h-24 w-full rounded-xl" />
        </div>
      ) : (
        <>
          {summary && summary.totalCalculations > 0 && (
            <Card className="p-5 border-none shadow-sm bg-primary text-primary-foreground">
              <h3 className="font-medium opacity-90 mb-4 flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                Last 7 Days
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-light">{summary.recentCalculationsCount}</div>
                  <div className="text-xs opacity-80 mt-1 uppercase tracking-wider font-medium">Calculations</div>
                </div>
                <div>
                  <div className="text-3xl font-light">{summary.averageTotalDose?.toFixed(1) || 0}u</div>
                  <div className="text-xs opacity-80 mt-1 uppercase tracking-wider font-medium">Avg Dose</div>
                </div>
              </div>
            </Card>
          )}

          <div className="space-y-3 mt-8">
            <h3 className="font-medium text-muted-foreground text-sm uppercase tracking-wider px-1">Recent Records</h3>
            
            {calculations?.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground bg-white rounded-xl shadow-sm">
                No past calculations found.
              </div>
            ) : (
              calculations?.map((calc) => (
                <Card key={calc.id} className="p-4 border-none shadow-sm bg-white hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm font-medium text-muted-foreground">
                      {format(new Date(calc.createdAt), "MMM d, h:mm a")}
                    </span>
                    <span className="bg-secondary/50 text-secondary-foreground px-2 py-0.5 rounded-full text-sm font-medium">
                      {calc.totalDose}u
                    </span>
                  </div>
                  
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-md">
                      <Droplets className="h-3.5 w-3.5" />
                      <span>{calc.currentBg}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-md">
                      <Utensils className="h-3.5 w-3.5" />
                      <span>{calc.carbs}g</span>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}
