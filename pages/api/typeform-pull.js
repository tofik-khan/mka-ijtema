import { createClient } from "@typeform/api-client";

export default async function handler(req, res) {
  const typeformAPI = createClient({
    token: process.env.TYPEFORM_ACCESS_TOKEN,
  });

  let data = [];
  await typeformAPI.responses
    .list({
      uid: process.env.TYPEFORM_UID,
      pageSize: 1000,
      fields: ["cIUnCoIkUmqg", "XYxQXIjyyCCJ"],
    })
    .then((response) => {
      data = response.items.map((item) => item.answers);
    });

  res.status(200).json({ data: data });
}
