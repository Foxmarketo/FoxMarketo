export async function POST(req) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return Response.json({ ok: false, error: "email required" }, { status: 400 });
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: name ? { FIRSTNAME: name } : {},
        listIds: [3],
        updateEnabled: true,
      }),
    });

    // Brevo returns 201 on create, 204 on update-existing
    if (res.ok || res.status === 204) {
      return Response.json({ ok: true });
    }
    const err = await res.text();
    return Response.json({ ok: false, error: err }, { status: 502 });
  } catch (e) {
    return Response.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
