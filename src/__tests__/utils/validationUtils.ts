import { checkRequiredProperties } from '../../utils/validationUtils';

describe('checkRequiredProperties', () => {
  it('should return an empty string if all required properties are present', () => {
    const reqBody = { prop1: 'value1', prop2: 'value2' };
    const requiredProps = ['prop1', 'prop2'];
    const result = checkRequiredProperties(reqBody, requiredProps);
    expect(result).toBe('');
  });

  it('should return a string indicating the missing required properties', () => {
    const reqBody = { prop1: 'value1', prop3: 'value3' };
    const requiredProps = ['prop1', 'prop2'];
    const result = checkRequiredProperties(reqBody, requiredProps);
    expect(result).toBe('Missing required property: prop2. ');
  });

  it('should handle the case when there is only one missing required property', () => {
    const reqBody = { prop2: 'value2' };
    const requiredProps = ['prop1', 'prop2'];
    const result = checkRequiredProperties(reqBody, requiredProps);
    expect(result).toBe('Missing required property: prop1. ');
  });

  it('should return an empty string if no required properties are provided', () => {
    const reqBody = { prop1: 'value1', prop2: 'value2' };
    const requiredProps: string[] = [];
    const result = checkRequiredProperties(reqBody, requiredProps);
    expect(result).toBe('');
  });

  it('should return a string listing all missing properties if the request body is empty', () => {
    const reqBody = {};
    const requiredProps = ['prop1', 'prop2'];
    const result = checkRequiredProperties(reqBody, requiredProps);
    expect(result).toBe('Missing required properties: prop1, prop2. ');
  });
});
