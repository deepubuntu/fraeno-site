// www is an alias of fraeno.com. Pages does not apply host-level rules from
// _redirects, so this middleware sends the alias to the canonical host.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === "www.fraeno.com") {
    url.hostname = "fraeno.com";
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
