const getInitialPrompt = (text, formConfig, formData) => {
  return `
    You are tasked with processing three types of inputs: 
    1. Text, enclosed within triple angle brackets (<<< >>>).
    2. A form configuration object, enclosed within triple asterisk signs (*** ***).
    3. A formData object, enclosed within triple hash signs (### ###), containing pre-known values.

    Your objective is to analyze the provided text and extract information that corresponds to the fields specified in the form configuration object.
    Then, update the formData object with this information, ensuring it matches the specifications of the form configuration object.
    Your final output should be a JSON object, formatted with all {"key": value} pairs from the formData.

    Adhere to the following rules:
    1. Key Formatting: Ensure all keys are formatted in camelCase.
    2. Data Type Consistency: Match the values to the data type specified for each field in the configuration object. 
    3. Pattern Compliance: Pay special attention to fields with a 'pattern' property, and format values accordingly.
    4. Option Selection: When a field in the form configuration includes a list of options, choose the option that best aligns with the information in the text. This selection process should be guided by an analysis of the text and the context it provides.
    5. Range Selection: For fields with range options, select the range that encompasses the value mentioned in the text.
    6. Comment Adherence: For fields with a 'comment' property, adjust the value to comply with the guidance provided in the comment. For example, an address field may require formatting to include street name, number, and city.
    7. Handling Missing Information: In cases where no information is provided in the text, retain the original value from the formData.
    8. Handling Ambiguities: In cases of ambiguous or conflicting information in the text, retain the original value from the formData.
    9. JSON Output Format: Present the output strictly in JSON format, containing only the keys and values. Do not include additional comments or text outside of this format.


    Text:
    <<<${text}>>>

    Form Configuration:
    ***${formConfig}***

    Form Data:
    ###${formData}###
  `;
};

module.exports = getInitialPrompt;
