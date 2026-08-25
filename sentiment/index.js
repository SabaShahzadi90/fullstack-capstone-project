const natural = require('natural');

const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");

function getSentiment(text) {
  const tokens = text.split(' ');
  return analyzer.getSentiment(tokens);
}

module.exports = { getSentiment };
