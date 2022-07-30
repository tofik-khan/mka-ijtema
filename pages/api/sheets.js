export default async function handler(req, res) {
  // inlcude express
  const express = require("express");

  //googleapis
  const { google } = require("googleapis");

  const auth = new google.auth.GoogleAuth({
    keyFile: "keys.json", //the key file
    //url to spreadsheets API
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  //Auth client Object
  const authClientObject = await auth.getClient();

  //Google sheets instance
  const googleSheetsInstance = google.sheets({
    version: "v4",
    auth: authClientObject,
  });

  // spreadsheet id
  const spreadsheetId = "14wpEOFhiExNp_CT4RhxmayY9cljFXUNsq4Drn1ZuOhw";

  //Read front the spreadsheet
  const readData = await googleSheetsInstance.spreadsheets.values.get({
    auth, //auth object
    spreadsheetId, // spreadsheet id
    range: "WebsiteData!A:K", //range of cells to read from.
  });
  res.status(200).json(readData.data.values);
}
