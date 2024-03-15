import { generateSignature } from '../utils/generateSignature';


async function getSpotAccount(req, res) {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey) return res.status(400).json({ error: 'API Key não fornecida no cabeçalho.' });

  const signature = generateSignature(req.query);
  const url = `https://api1.binance.com/api/v3/account?${signature}`;

  const options = {
    'method': 'GET',
    'headers': {
      'X-MBX-APIKEY': apiKey,
      'Accept': 'application/json',
    }
  };

  try {
    const request = await fetch(url, options);
    const data = await request.json();
    res.json(data);

  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Erro ao buscar dados na API.' });
  }

}


export default getSpotAccount;