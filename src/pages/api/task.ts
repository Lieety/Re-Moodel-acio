import { type APIRoute } from "astro";
import { getSession } from "auth-astro/server";

export const POST: APIRoute = async ({ request }) => {
  const session = await getSession(request);

  if (!session) {
    return new Response("Unautorized", { status: 401 });
  }

  const username = session?.user?.name;

  const { task } = await request.json();
  return new Response("Hello world");
};
