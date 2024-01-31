const getInitialPrompt = (text, formConfig, formData) => {
    return `
    You are provided with (1) text, delimited by tripple angle brackets, \
    (2) a form configuration object, delimited by tripple asterisk signs, \
    and (3) a formData object, delimited by triple hash signs, which contains the already known values. 
    On the basis of the information in the following text and complying with the form configuration object \
    update the values in the formData object and print it out.
    
    You must follow these rules:
    1 - The keys should be in camelCase
    2 - The values should be of the data type specified for that field in the configuration object.
    2 - If the field configuration contains a list of options, choose the most accurate option as the value.
    3 - If the field configuration contains a pattern property, follow the specified pattern.
    4 - If for a particular key, no value was found in the text, keep the original value.
    5 - Print out only the updated formData object. /
    Always write the output of your response in JSON format. /
    Never write additional comments in the output.
    Text:
    <<<${text}>>>
    Form Configuration:
    ***${formConfig}***
    Form Data:
    ###${formData}###
    `;
  };

module.exports = getInitialPrompt;