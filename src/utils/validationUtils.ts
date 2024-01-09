import errorMessages from '../config/errorMessages';
/**
 * Checks if the required properties are present in the given request body.
 * 
 * @param reqBody - The request body object.
 * @param requiredProps - An array of required property names.
 * @returns A string indicating the missing required properties, if any.
 */
export function checkRequiredProperties(reqBody: any, requiredProps: string[]): string {
    const missingProps = requiredProps.filter((prop) => reqBody[prop] === undefined);
    if (missingProps.length > 0) {
        const propertyLabel = missingProps.length === 1 ? errorMessages.missingSingular : errorMessages.missingMultiple;
        return `${errorMessages.missingMessage} ${propertyLabel} ${missingProps.join(', ')}. `;
    }
    return '';
}
