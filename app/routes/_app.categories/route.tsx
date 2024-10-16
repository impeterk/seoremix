import { type LoaderFunctionArgs } from "@remix-run/node";

import { ContentLayout } from "~/components/admin-panel/content-layout";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  return { context };
};

export default function CategoriesPage() {
  return (
    <ContentLayout title="Categories">
      <Card>
        <CardHeader>
          <CardTitle>maybe some categories would be great</CardTitle>
        </CardHeader>
      </Card>
    </ContentLayout>
  );
}
