export interface ErrorMessages {
    minNumberMustBeNumber: string;
    minNumberGreaterThanZero: string;
    maxNumberMustBeNumber: string;
    maxNumberGreaterThanMinNumber: string;
    featureMustBeArray: string;
    featureArrayNotEmpty: string;
    featureArrayValidValues: string;
    missingSingular: string;
    missingMultiple: string;
    missingMessage: string;
}

const errorMessages: ErrorMessages = {
    minNumberMustBeNumber: 'Property minNumber must be a number.',
    minNumberGreaterThanZero: 'Property minNumber must be greater than 0.',
    maxNumberMustBeNumber: 'Property maxNumber must be a number.',
    maxNumberGreaterThanMinNumber: 'Property maxNumber must be greater than minNumber.',
    featureMustBeArray: 'Property feature must be an array.',
    featureArrayNotEmpty: 'Property feature array must not be empty.',
    featureArrayValidValues: 'Property feature array can only contain "palindrome" and/or "prime".',
    missingSingular: 'property:',
    missingMultiple: 'properties:',
    missingMessage: 'Missing required'
};

export default errorMessages;
