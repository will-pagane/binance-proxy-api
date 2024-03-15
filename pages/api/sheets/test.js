import getGoogleAuth from './utils/auth';


async function test(req, res) {
  const googleSheets = await getGoogleAuth();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const range = 'Balanceamento!B4:S';

  try {
    const response = await googleSheets.spreadsheets.values.get({
      spreadsheetId,
      range
    });

    const rows = response.data.values;

    if (rows.length) {
      res.status(200).json({ data: rows });
    } else res.status(200).send({ data: null, message: 'Nenhum dado foi encontrado.' });

  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Erro ao buscar dados na API.', details: e });
  }
}


export default test;