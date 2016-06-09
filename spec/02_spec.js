(function(){
  const n1 = 12345;
  const n2 = 65432;
  const r1 = 3.14;
  const r2 = 1.41;

  describe("plus", function(){
    it("第1引数と第2引数の和を返す", function(){
      expect(plus(n1, n2)).to.be(n1 + n2);
      expect(plus(r1, r2)).to.be(r1 + r2);
    });
  });

  describe("minus", function(){
    it("第1引数と第2引数の差を返す", function(){
      expect(minus(n1, n2)).to.be(n1 - n2);
      expect(minus(r1, r2)).to.be(r1 - r2);
    });
  });

  describe("times", function(){
    it("第1引数と第2引数の積を返す", function(){
      expect(times(n1, n2)).to.be(n1 * n2);
      expect(times(r1, r2)).to.be(r1 * r2);
    });
  });

  describe("div", function(){
    it("第1引数と第2引数の商を返す", function(){
      expect(div(n1, n2)).to.be(n1 / n2);
      expect(div(r1, r2)).to.be(r1 / r2);
    });
  });

  describe("mod", function(){
    it("第1引数と第2引数の剰余を返す", function(){
      expect(mod(n1, n2)).to.be(n1 % n2);
      expect(mod(r1, r2)).to.be(r1 % r2);
    });
  });

})();
