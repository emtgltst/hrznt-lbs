import validateNumberFeaturesRequest from '../../middlewares/validateInput';
import { Request, Response } from 'express';
import errorMessages from '../../config/errorMessages';

describe('validateNumberFeaturesRequest', () => {
  let req: Request;
  let res: Response;

  beforeEach(() => {
    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
  });

  it('should return true if input is valid', () => {
    req.body = {
      minNumber: 1,
      maxNumber: 10,
      feature: ['palindrome'],
    };

    const result = validateNumberFeaturesRequest(req, res);

    expect(result).toBe(true);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  it('should return false and set error message if minNumber is not a number', () => {
    req.body = {
      minNumber: 'one',
      maxNumber: 10,
      feature: ['palindrome'],
    };

    const result = validateNumberFeaturesRequest(req, res);

    expect(result).toBe(false);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: `${errorMessages.minNumberMustBeNumber}` });
  });

  it('should return false and set error message if minNumber is less than or equal to 0', () => {
    req.body = {
      minNumber: 0,
      maxNumber: 10,
      feature: ['palindrome'],
    };

    const result = validateNumberFeaturesRequest(req, res);

    expect(result).toBe(false);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: `${errorMessages.minNumberGreaterThanZero}` });
  });

  it('should return false and set error message if maxNumber is not a number', () => {
    req.body = {
      minNumber: 1,
      maxNumber: 'ten',
      feature: ['palindrome'],
    };

    const result = validateNumberFeaturesRequest(req, res);

    expect(result).toBe(false);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: `${errorMessages.maxNumberMustBeNumber}` });
  });

  it('should return false and set error message if maxNumber is less than or equal to minNumber', () => {
    req.body = {
      minNumber: 10,
      maxNumber: 5,
      feature: ['palindrome'],
    };

    const result = validateNumberFeaturesRequest(req, res);

    expect(result).toBe(false);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: `${errorMessages.maxNumberGreaterThanMinNumber}` });
  });

  it('should return false and set error message if feature is not an array', () => {
    req.body = {
      minNumber: 1,
      maxNumber: 10,
      feature: 'palindrome',
    };

    const result = validateNumberFeaturesRequest(req, res);

    expect(result).toBe(false);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: `${errorMessages.featureMustBeArray}` });
  });

  it('should return false and set error message if feature array is empty', () => {
    req.body = {
      minNumber: 1,
      maxNumber: 10,
      feature: [],
    };

    const result = validateNumberFeaturesRequest(req, res);

    expect(result).toBe(false);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: `${errorMessages.featureArrayNotEmpty}` });
  });

  it('should return false and set error message if feature array contains invalid values', () => {
    req.body = {
      minNumber: 1,
      maxNumber: 10,
      feature: ['palindrome', 'invalid'],
    };

    const result = validateNumberFeaturesRequest(req, res);

    expect(result).toBe(false);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: `${errorMessages.featureArrayValidValues}` });
  });

  it('should return false and set error message for missing minNumber and invalid maxNumber', () => {
    req.body = {
      // minNumber missing,
      maxNumber: 'ten',
      feature: ['palindrome'],
    };

    const result = validateNumberFeaturesRequest(req, res);

    expect(result).toBe(false);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: `Missing required property: minNumber. ${errorMessages.maxNumberMustBeNumber}` });
  });

  it('should return false and set error message for invalid minNumber and empty feature array', () => {
    req.body = {
      minNumber: 0,
      maxNumber: 10,
      feature: [],
    };

    const result = validateNumberFeaturesRequest(req, res);

    expect(result).toBe(false);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: `${errorMessages.minNumberGreaterThanZero} ${errorMessages.featureArrayNotEmpty}` });
  });
});
