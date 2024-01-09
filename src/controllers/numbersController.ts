import { Request, Response } from 'express';
import validateNumberFeaturesRequest from '../middlewares/validateInput';
import numberFeaturesService from '../services/numberService';

/**
 * Handles the request to the numbers controller.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @return The response JSON with data and time of execution.
 */
export default function numbersController(req: Request, res: Response): void {
    if (!validateNumberFeaturesRequest(req, res)) return;

    const { minNumber, maxNumber, feature } = req.body;
    const result = numberFeaturesService(minNumber, maxNumber, feature);

    res.json(result);
}
