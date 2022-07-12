const ENDPOINT = "http://127.0.0.1:8000/api";

export default function register({ name, password, email, role = 2 }) {
  return fetch(`${ENDPOINT}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, role }),
  }).then((res) => {
    console.log(res);
    if (!res.ok) throw new Error("Response is NOT ok");
    return true;
  });
}
