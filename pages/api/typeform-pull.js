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

  const attendanceObject = processData(data);
  res.status(200).json(attendanceObject);
}

function processData(data) {
  let obj = {};
  data.map((entry) => {
    const majlis = entry[1].text;
    const aux = entry[0].text;

    if (aux === "Khuddam") {
      obj[majlis] = obj[majlis] + 1 || 1;
    }
  });
  return obj;
}
