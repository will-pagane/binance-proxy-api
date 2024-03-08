import generateSignature from '../utils/generateSignature';


async function getUserData(request, response) {
  const signature = generateSignature();
  const url = `https://api1.binance.com/api/v3/account?${signature}`;

  const options = {
    'method': 'GET',
    'headers': {
      'X-MBX-APIKEY': 'M3Tj7rpeZRbaL4JuVEXTFE1Ul4g3953byYIUsu78eiJMSKAfqPaSe4Erq2hKBD5q',
      'Accept': 'application/json',
    }
  };

  const request = await fetch(url, options);
  const data = await request.json();

  return data;
}

export default getUserData;