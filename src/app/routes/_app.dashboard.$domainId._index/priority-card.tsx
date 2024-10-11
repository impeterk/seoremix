import { CircleAlert } from "lucide-react";
import { Card, CardHeader, CardTitle } from "src/app/components/ui/card";

export const PriorityCard = () => {
  return (
    <Card className="bg-red-100 dark:text-background">
      <CardHeader className="flex-row items-center space-y-0">
        <CardTitle className="">High Priority</CardTitle>
        <CircleAlert className="ml-4 size-6 text-destructive" />
      </CardHeader>
    </Card>
  );
};
