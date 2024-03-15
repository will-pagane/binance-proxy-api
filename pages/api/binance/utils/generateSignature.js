import crypto from 'crypto';


function generateSignature(query) {
  let params = {
    timestamp: new Date().getTime(),
    recvWindow: 60000
  };

  const queryParams = new URLSearchParams(query);
  for (const [key, value] of queryParams) {
    params[key] = value;
  }

  const finalQueryString = new URLSearchParams(params).toString();

  const signature = crypto
    .createHmac('sha256', process.env.API_SECRET)
    .update(finalQueryString)
    .digest('hex');
  
  return `${finalQueryString}&signature=${signature}`;
}


export default generateSignature;