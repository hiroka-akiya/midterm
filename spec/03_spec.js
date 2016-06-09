(function(){
  describe("isEvenNumber", function(){
    context("偶数が引数に指定された時", function(){
      const a = 0;
      const b = 2;
      const c = -2;
      const d = 10;

      it("true を返す", function(){
        expect(isEvenNumber(a)).to.be.ok();
        expect(isEvenNumber(b)).to.be.ok();
        expect(isEvenNumber(c)).to.be.ok();
        expect(isEvenNumber(d)).to.be.ok();
      });
    });

    context("奇数が引数に指定された時", function(){
      const a = 1;
      const b = -3;

      it("false を返す", function(){
        expect(isEvenNumber(a)).not.to.be.ok();
        expect(isEvenNumber(b)).not.to.be.ok();
      });
    });
  });

})();
