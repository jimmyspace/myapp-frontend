import numeral from 'numeral';

// let numeral = require('numeral');

export default {
	methods: {
    numeralNumber: function(arg, num){
      if ('--' == arg || '' === arg || undefined == arg) {
        return '--'
      }
      if (!isFinite(arg)) {
        return arg;
      }
      if (undefined != num) {
        var str = '0.'
        for (let i = num - 1; i >= 0; i--) {
          str += '0';
        }
        if(0 == num){
          str = '0';
        }
        return numeral(arg).format( '0,' + str );
      }
      return numeral(arg).format( '0,0.00' );
    },
    numeralPercent: function(arg, num){
      if ('--' == arg || '' === arg || undefined == arg) {
        return '--'
      }
      if (!isFinite(arg)) {
        return arg;
      }
      if (undefined != num) {
        var str = '0.'
        for (let i = num - 1; i >= 0; i--) {
          str += '0';
        }
        if(0 == num){
          str = '0';
        }
        return numeral(arg).format( '0,' + str + '%' );
      }
      return numeral(arg).format( '0.00%' );
    },
    numeralPercentV2: function(arg){
      if ('--' == arg || '- -' == arg) {
        return arg;
      }
      return numeral(arg).format( '0.00%' );
    },
    signNumeralNumber: function(arg, num){
      if('-' == arg || '--' == arg){
        return arg;
      }

      var noSign = +(arg||0).toString().replace(/^(\-|\+)/,'');
      return (arg<0 ? '-' : '+') + this.numeralNumber(noSign, num);
    },
    signNumeralPercent: function(arg, num){
      if('-' == arg || '--' == arg){
        return arg;
      }

      var noSign = +(arg||0).toString().replace(/^(\-|\+)/,'');
      return (arg<0 ? '-' : '+') + this.numeralPercent(noSign, num);
    }
  }
}