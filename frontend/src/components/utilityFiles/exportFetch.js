export default async function exportFetch(url, data, method = null) {
  const request = await fetch(url, {
    method: method ? method : "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...data }),
    credentials: "include",
  });
  let res;
  try {
    res = await request.json();
  } catch {
    try {
      res = await request.text();
    } catch {
      res = null;
    }
  }
  return res;
}
