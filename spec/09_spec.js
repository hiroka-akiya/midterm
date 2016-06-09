(function(){

  describe("countDigits", function(){
    const f = n => n < 0? -1 : (Math.floor(n) + "").length;

    context("0 以上の数が指定された場合", function(){
      const zero = 0;
      const a = 123;
      const b = 123456;

      it("数字の桁数を返す", function(){
        expect(countDigits(zero)).to.be(f(zero));
        expect(countDigits(a)).to.be(f(a));
        expect(countDigits(b)).to.be(f(b));
      });
    });

    context("負の数が指定された場合", function(){
      const a = -1;
      const b = -123456;

      it("-1 を返す", function(){
        expect(countDigits(a)).to.be(f(a));
        expect(countDigits(b)).to.be(f(b));
      });
    });

    context("小数点以下の桁がある場合", function(){
      const a = 0.1234;
      const b = 31415.9265;

      it("小数点以下を切り捨て、桁数を返す", function(){
        expect(countDigits(a)).to.be(f(a));
        expect(countDigits(b)).to.be(f(b));
      });
    });

  });

})();
