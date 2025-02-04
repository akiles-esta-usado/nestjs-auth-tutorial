import { describe, it } from 'jsr:@std/testing/bdd';
import { expect } from 'jsr:@std/expect';
import { formatName } from './format-name.ts';

describe('formatName', () => {
  it('should trim leading and trailing spaces and capitalize the first letter', () => {
    expect(formatName('  pizza  ')).toBe('Pizza');
  });
});
