import { WandSparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/app/components/ui/card";

export function RecommenedCard() {
  return (
    <Card className="bg-sky-100 dark:text-background">
      <CardHeader className="flex-row items-center space-y-0">
        <CardTitle className="">High Priority</CardTitle>
        <WandSparkles className="ml-4 size-6 text-sky-600" />
      </CardHeader>
      <CardContent>Our Recommendations from A.I.</CardContent>
    </Card>
  );
}
