import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';

import createRule from '../../src/creators/rule.ts';

describe('Create Rule', () => {
  let rule: any;

  beforeEach(() => {
    const addRule = async (selector: string) => {
      return createRule(selector).then((argument) => {
        expect(argument.selector).equal(`&${selector}`);
        expect(argument.type).equal('rule');
      });
    };

    rule = addRule;
  });

  it('create an object with argument (::pseudo-element)', async () => {
    return rule('::pseudo-element');
  });

  it('create an object with argument (:pseudo-class)', async () => {
    return rule(':pseudo-class');
  });

  it('create an object with argument (?\\[(.*)\\])', async () => {
    return rule('?\\[(.*)\\]');
  });

  it('create an object with argument (?\\.(.*))', async () => {
    return rule('?\\.(.*)');
  });

  it('create an object with argument (--)', async () => {
    return rule('--');
  });

  it('create an object with argument (__)', async () => {
    return rule('__');
  });
});
