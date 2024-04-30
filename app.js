const encodeURL = (longURL) => {
  
    const shortCode = generateShortCode(longURL);
  
    
    const shortURL = `https://yourdomain.com/${shortCode}`;
  
    const urlMap = {};
    urlMap[shortCode] = longURL;
  
    return shortURL;
  };
  
  const generateShortCode = (longURL) => {
    const hash = hashFunction(longURL);
    return hash.substring(0, 6);
  };
  
  const hashFunction = (str) => {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; 
    }
    return hash.toString();
  };
  
  
  const decodeURL = (shortURL) => {
    const shortCode = shortURL.split('/').pop();
    const urlMap = {}; 
    return urlMap[shortCode];
  };
  
  const longURL = "https://www.example.com/very/long/url";
  const shortURL = encodeURL(longURL);
  
  console.log(`Original URL: ${longURL}`);
  console.log(`Shortened URL: ${shortURL}`);
  
  const decodedURL = decodeURL(shortURL);
  console.log(`Decoded URL: ${decodedURL}`);
  