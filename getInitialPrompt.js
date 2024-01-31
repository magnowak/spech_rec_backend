const getInitialPrompt = (text, formConfig, formData) => {
    return `
    You are provided with (1) text, delimited by tripple angle brackets, \
    (2) a form configuration object, delimited by tripple asterisk signs, \
    and (3) a formData object, delimited by triple hash signs, which contains the already known values. 
    On the basis of the information in the following text and complying with the form configuration object \
    update formData with the information collected from the text and \
    print out a JSON with all {"key": value} pairs, structured in the same way as formData.
    
    You must follow these rules:
    1 - The keys should be in camelCase.
    2 - The values should be of the data type specified for that field in the configuration object.
    3 - If the form configuration for a particular field contains a list of options, instead of using the information from the text directly, select the option that most accurately represents the information and set it as the value for that field.
    4 - If the form configuration for a particular field contains a pattern property, format the value accordingly.
    5 - If the form configuration for a particular field contains a comment property, adapt the value in a way that complies with the specified comment.
    6 - If for a particular key, no value was found in the text, keep the original value.
    7 - Print out only the keys and values. \
    Always write the output of your response in JSON format. \
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