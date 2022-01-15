const { google } = require('googleapis');
const path = require('path');
const config = require('../config/index');

exports.store = async (data) => {

    const auth = new google.auth.GoogleAuth({
        keyFile: path.resolve(__dirname + '../../../credentials.json'),
        scopes: config.props.SCOPE,
    });

    // Create client instance for auth
    const client = await auth.getClient();

    // Instance of Google Sheets API
    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = config.props.SPREADSHEETID;

    // Write row(s) to spreadsheet
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1!A:G",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [[
                data.ID,
                data.position,
                data.experienceYears,
                data.uniquenessReason,
                data.choosingReason,
                data.careerDescirpiton,
                data.time
            ]],
        },
    });


}


