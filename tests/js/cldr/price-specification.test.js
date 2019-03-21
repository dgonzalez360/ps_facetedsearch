import {expect} from 'chai';
import PriceSpecification from '../../../_dev/cldr/price-specification';

describe('PriceSpecification', () => {
  describe('validateData', () => {
    it('should throw if invalid positive pattern', () => {
      expect(() => { new PriceSpecification(); }).to.throw('Invalid positivePattern');
    });

    it('should throw if invalid negative pattern', () => {
      expect(() => {
        new PriceSpecification(
          '#,##0.###',
        );
      }).to.throw('Invalid negativePattern');
    });

    it('should throw if invalid symbol', () => {
      expect(() => {
        new PriceSpecification(
          '#,##0.###',
          '-#,##0.###',
        );
      }).to.throw('Invalid symbol');
    });

    it('should throw if invalid maxFractionDigits', () => {
      expect(() => {
        new PriceSpecification(
          '#,##0.###',
          '-#,##0.###',
          '$',
        );
      }).to.throw('Invalid maxFractionDigits');
    });

    it('should throw if invalid minFractionDigits', () => {
      expect(() => {
        new PriceSpecification(
          '#,##0.###',
          '-#,##0.###',
          '$',
          3,
        );
      }).to.throw('Invalid minFractionDigits');
    });

    it('should throw if invalid groupingUsed', () => {
      expect(() => {
        new PriceSpecification(
          '#,##0.###',
          '-#,##0.###',
          '$',
          3,
          0,
        );
      }).to.throw('Invalid groupingUsed');
    });

    it('should throw if invalid primaryGroupSize', () => {
      expect(() => {
        new PriceSpecification(
          '#,##0.###',
          '-#,##0.###',
          '$',
          3,
          0,
          false,
        );
      }).to.throw('Invalid primaryGroupSize');
    });

    it('should throw if invalid secondaryGroupSize', () => {
      expect(() => {
        new PriceSpecification(
          '#,##0.###',
          '-#,##0.###',
          '$',
          3,
          0,
          true,
          3,
        );
      }).to.throw('Invalid secondaryGroupSize');
    });
  });
});
