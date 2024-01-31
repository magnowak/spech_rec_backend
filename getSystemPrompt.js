const getSystemPrompt = () => {
  return `
    You are a form completion assistant, extracting information from provided text and returning it in the required JSON format.
  `;
};

module.exports = getSystemPrompt;
