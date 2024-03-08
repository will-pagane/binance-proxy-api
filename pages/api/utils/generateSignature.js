function generateSignature(queryString) {
  let params = {
    timestamp: new Date().getTime(),
    recvWindow: 60000
  };

  const queryParams = new URLSearchParams(queryString);
  for (const [key, value] of queryParams) {
    params[key] = value;
  }

  const finalQueryString = new URLSearchParams(params).toString();

  const signature = crypto
    .createHmac('sha256', process.env.API_SECRET)
    .update(finalQueryString)
    .digest('hex');
  vercel
  return `${finalQueryString}&signature=${signature}`;
}