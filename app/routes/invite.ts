import type { ActionFunctionArgs } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const fd = await request.formData();
  const email = fd.get("email");
  if (!email) {
    return {
      data: null,
      error: {
        message: "Please provide a valid email",
      },
    };
  }
  return {
    error: null,
    data: { message: `${email} has been registered. Good luck 🎉` },
  };
}
