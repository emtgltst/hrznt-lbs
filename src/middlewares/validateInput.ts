import { Request, Response } from 'express';
import { checkRequiredProperties } from '../utils/validationUtils';
import errorMessages from '../config/errorMessages';
/**
 * Validates the input received in the Number Features request body.
 * 
 * @param req The Express request object.
 * @param res The Express response object.
 * @returns True if the input is valid, false otherwise.
 */
export default function validateNumberFeaturesRequest(req: Request, res: Response): boolean {
    const requiredProps = ['minNumber', 'maxNumber', 'feature'];
    let errorMessage = checkRequiredProperties(req.body, requiredProps);

    const { minNumber, maxNumber, feature } = req.body;

    if (minNumber !== undefined) {
        if (typeof minNumber !== 'number') {
            errorMessage += `${errorMessages.minNumberMustBeNumber} `;
        } else if (minNumber <= 0) {
            errorMessage += `${errorMessages.minNumberGreaterThanZero} `;
        }
    }

    if (maxNumber !== undefined) {
        if (typeof maxNumber !== 'number') {
            errorMessage += `${errorMessages.maxNumberMustBeNumber} `;
        } else if (maxNumber <= minNumber) {
            errorMessage += `${errorMessages.maxNumberGreaterThanMinNumber} `;
        }
    }

    if (feature !== undefined) {
        if (!Array.isArray(feature)) {
            errorMessage += `${errorMessages.featureMustBeArray} `;
        } else if (feature.length === 0) {
            errorMessage += `${errorMessages.featureArrayNotEmpty} `;
        } else if (!feature.every((f) => f === 'palindrome' || f === 'prime')) {
            errorMessage += `${errorMessages.featureArrayValidValues} `;
        }
    }

    if (errorMessage) {
        res.status(400).json({ error: errorMessage.trim() });
        return false;
    }

    return true;
}
