'use strict'; /* global describe, it, before */
var should = require('should');
var writtenNumber = require('..');

describe('written-number', function() {
  describe('writtenNumber(n, { lang: \'en\', ... })', function() {
    before(function() {
      writtenNumber.defaults.lang = 'en';
    });

    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
      writtenNumber(1000000000).should.equal('one billion');
      writtenNumber(3).should.equal('three');
      writtenNumber(8).should.equal('eight');
    });

    it('correctly converts numbers < 20', function() {
      writtenNumber(13).should.equal('thirteen');
      writtenNumber(19).should.equal('nineteen');
    });

    it('correctly converts numbers < 100', function() {
      writtenNumber(20).should.equal('twenty');
      writtenNumber(25).should.equal('twenty-five');
      writtenNumber(88).should.equal('eighty-eight');
      writtenNumber(73).should.equal('seventy-three');
    });

    it('correctly converts numbers < 1000', function() {
      writtenNumber(200).should.equal('two hundred');
      writtenNumber(242).should.equal('two hundred and forty-two');
      writtenNumber(1234).should.equal(
        'one thousand two hundred and thirty-four'
      );
      writtenNumber(4323).should.equal(
        'four thousand three hundred and twenty-three'
      );
    });

    it('correctly converts numbers > 1000', function() {
      writtenNumber(4323000).should.equal(
        'four million three hundred twenty-three thousand'
      );
      writtenNumber(4323055).should.equal(
          'four million three hundred twenty-three thousand and fifty-five'
        );
      writtenNumber(1570025).should.equal(
        'one million five hundred seventy thousand and twenty-five'
      );
    });

    it('correctly converts numbers > 1 000 000 000', function() {
      writtenNumber(1000000000).should.equal('one billion');
      writtenNumber(2580000000).should.equal(
        'two billion five hundred eighty million'
      );
      writtenNumber(1000000000000).should.equal('one trillion');
      writtenNumber(3627000000000).should.equal(
        'three trillion six hundred twenty-seven billion'
      );
    });
  });

  describe('writtenNumber(n, { lang: \'es\', ... })', function() {
    before(function() {
      writtenNumber.defaults.lang = 'es';
    });

    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
      writtenNumber(3).should.equal('tres');
      writtenNumber(8).should.equal('ocho');
    });

    it('correctly converts numbers < 20', function() {
      writtenNumber(13).should.equal('trece');
      writtenNumber(19).should.equal('diecinueve');
    });

    it('correctly converts numbers < 100', function() {
      writtenNumber(20).should.equal('veinte');
      writtenNumber(25).should.equal('veinticinco');
      writtenNumber(88).should.equal('ochenta y ocho');
      writtenNumber(73).should.equal('setenta y tres');
    });

    it('correctly converts numbers < 1000', function() {
      writtenNumber(144).should.equal('ciento cuarenta y cuatro');
      writtenNumber(200).should.equal('doscientos');
      writtenNumber(1234).should.equal('mil doscientos treinta y cuatro');
      writtenNumber(4323).should.equal('cuatro mil trescientos veintitres');
      writtenNumber(242).should.equal('doscientos cuarenta y dos');
    });

    it('correctly converts numbers > 1000', function() {
      writtenNumber(4323000).should.equal(
        'cuatro millones trescientos veintitres mil'
      );
      writtenNumber(4323055).should.equal(
        'cuatro millones trescientos veintitres mil cincuenta y cinco'
      );
      writtenNumber(1570025).should.equal(
        'un millón quinientos setenta mil veinticinco'
      );
    });

    it('correctly converts numbers > 1 000 000 000', function() {
      writtenNumber(1000000000).should.equal('mil millones');
      writtenNumber(2580000000).should.equal(
        'dos mil quinientos ochenta millones'
      );
      writtenNumber(1000000000000).should.equal('un billón');
      writtenNumber(3627000000000).should.equal(
        'tres billones seiscientos veintisiete mil millones'
      );
    });
  });

  describe('writtenNumber(n, { lang: \'pt\', ... })', function() {
    before(function() {
      writtenNumber.defaults.lang = 'pt';
    });

    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
      writtenNumber(3).should.equal('três');
      writtenNumber(8).should.equal('oito');
    });

    it('correctly converts numbers < 20', function() {
      writtenNumber(13).should.equal('treze');
      writtenNumber(19).should.equal('dezenove');
    });

    it('correctly converts numbers < 100', function() {
      writtenNumber(20).should.equal('vinte');
      writtenNumber(25).should.equal('vinte e cinco');
      writtenNumber(88).should.equal('oitenta e oito');
      writtenNumber(73).should.equal('setenta e três');
    });

    it('correctly converts numbers < 1000', function() {
      writtenNumber(144).should.equal('cento e quarenta e quatro');
      writtenNumber(200).should.equal('duzentos');
      writtenNumber(1234).should.equal('mil duzentos e trinta e quatro');
      writtenNumber(4323).should.equal('quatro mil trezentos e vinte e três');
      writtenNumber(242).should.equal('duzentos e quarenta e dois');
    });

    it('correctly converts numbers > 1000', function() {
      writtenNumber(4323000).should.equal(
        'quatro milhões trezentos e vinte e três mil'
      );
      writtenNumber(4323055).should.equal(
        'quatro milhões trezentos e vinte e três mil e cinquenta e cinco'
      );
      writtenNumber(1570025).should.equal(
        'um milhão quinhentos e setenta mil e vinte e cinco'
      );
    });

    it('correctly converts numbers > 1 000 000 000', function() {
      writtenNumber(1000000000).should.equal('um bilhão');
      writtenNumber(2580000000).should.equal(
        'dois bilhões quinhentos e oitenta milhões'
      );
      writtenNumber(1000000000000000).should.equal('um quadrilhão');
      writtenNumber(3627000000000).should.equal(
        'três trilhões seiscentos e vinte e sete bilhões'
      );
    });
  });
  
  describe('writtenNumber(n, { lang: \'fr\', ... })', function() {
    before(function() {
      writtenNumber.defaults.lang = 'fr';
    });

    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
      writtenNumber(3).should.equal('trois');
      writtenNumber(8).should.equal('huit');
    });

    it('correctly converts numbers < 20', function() {
      writtenNumber(13).should.equal('treize');
      writtenNumber(19).should.equal('dix-neuf');
    });

    it('correctly converts numbers < 100', function() {
      writtenNumber(20).should.equal('vingt');
      writtenNumber(25).should.equal('vingt-cinq');
      writtenNumber(73).should.equal('soixante-treize');
      writtenNumber(80).should.equal('quatre-vingts');
      writtenNumber(88).should.equal('quatre-vingt-huit');
      writtenNumber(90).should.equal('quatre-vingt-dix');
      writtenNumber(91).should.equal('quatre-vingt-onze');
    });

    it('correctly converts numbers < 1000', function() {
      writtenNumber(100).should.equal('cent');
      writtenNumber(110).should.equal('cent dix');
      writtenNumber(200).should.equal('deux cents');
      writtenNumber(242).should.equal('deux cent quarente-deux');
    });

    it('correctly converts numbers > 1000', function() {
      writtenNumber(1234).should.equal('mille deux cent trente-quatre');
      writtenNumber(4000).should.equal('quatre mille');
      writtenNumber(4323).should.equal('quatre mille trois cent vingt-trois');
      writtenNumber(1000000).should.equal('un million');
      writtenNumber(2000000).should.equal('deux millions');
      writtenNumber(2000001).should.equal('deux millions un');
      writtenNumber(4323000).should.equal('quatre millions trois cent vingt-trois mille');
      writtenNumber(4323055).should.equal('quatre millions trois cent vingt-trois mille cinquante-cinq');
      writtenNumber(1570025).should.equal('un million cinq cent soixante-dix mille vingt-cinq');
    });

    it('correctly converts numbers > 1 000 000 000', function() {
      writtenNumber(1000000000).should.equal('un milliard');
      writtenNumber(2580000000).should.equal(
          'deux milliards cinq cent quatre-vingts millions'
      );
      writtenNumber(1000000000000).should.equal('un billion');
      writtenNumber(3627000000000).should.equal(
          'trois billions six cent vingt-sept milliards'
      );
    });
  });

  describe('writtenNumber(n, { lang: \'vn\', ... })', function() {
    before(function() {
      writtenNumber.defaults.lang = 'vn';
    });

    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
      writtenNumber(3).should.equal('ba');
      writtenNumber(8).should.equal('tám');
    });

    it('correctly converts numbers < 20', function() {
      writtenNumber(13).should.equal('mười ba');
      writtenNumber(19).should.equal('mười chín');
    });

    it('correctly converts numbers < 100', function() {
      writtenNumber(20).should.equal('hai mươi');
      writtenNumber(25).should.equal('hai mươi lăm');
      writtenNumber(73).should.equal('bảy mươi ba');
      writtenNumber(80).should.equal('tám mươi');
      writtenNumber(88).should.equal('tám mươi tám');
      writtenNumber(90).should.equal('chín mươi');
      writtenNumber(91).should.equal('chín mươi một');
    });

    it('correctly converts numbers < 1000', function() {
      writtenNumber(100).should.equal('một trăm');
      writtenNumber(110).should.equal('một trăm mười');
      writtenNumber(200).should.equal('hai trăm');
      writtenNumber(242).should.equal('hai trăm bốn mươi hai');
      writtenNumber(202).should.equal('hai trăm lẻ hai');
    });

    it('correctly converts numbers > 1000', function() {
      writtenNumber(1009).should.equal('một nghìn lẻ chín');
      writtenNumber(1234).should.equal('một nghìn hai trăm ba mươi bốn');
      writtenNumber(4000).should.equal('bốn nghìn');
      writtenNumber(4323).should.equal('bốn nghìn ba trăm hai mươi ba');
      writtenNumber(509000).should.equal('năm trăm lẻ chín nghìn');
      writtenNumber(1000000).should.equal('một triệu');
      writtenNumber(2000000).should.equal('hai triệu');
      writtenNumber(2000001).should.equal('hai triệu lẻ một');
      writtenNumber(4323000).should.equal('bốn triệu ba trăm hai mươi ba nghìn');
      writtenNumber(4323055).should.equal('bốn triệu ba trăm hai mươi ba nghìn năm mươi lăm');
      writtenNumber(1570025).should.equal('một triệu năm trăm bảy mươi nghìn hai mươi lăm');
    });

    it('correctly converts numbers > 1 000 000 000', function() {
      writtenNumber(1000000000).should.equal('một tỷ');
      writtenNumber(2580000000).should.equal(
          'hai tỷ năm trăm tám mươi triệu'
      );
      writtenNumber(1000000000000).should.equal('một nghìn tỷ');
      writtenNumber(3627000000000).should.equal(
          'ba nghìn tỷ sáu trăm hai mươi bảy tỷ'
      );
    });
  });
});
