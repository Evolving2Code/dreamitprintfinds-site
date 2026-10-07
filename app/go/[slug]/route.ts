import { after, type NextRequest } from "next/server";
import { track } from "@vercel/analytics/server";
import { isLinkSlug, links } from "@/lib/links";

export async function GET(request: NextRequest, ctx: RouteContext<"/go/[slug]">) {
  const { slug } = await ctx.params;
  const known = isLinkSlug(slug);
  const destination = known ? links[slug] : links.shop;

  // Record the click after the redirect is sent so it never slows the visitor down.
  after(() => track("go", { slug: known ? slug : "unknown" }, { headers: request.headers }));

  return Response.redirect(destination, 307);
}
