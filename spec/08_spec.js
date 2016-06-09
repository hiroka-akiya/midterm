(function(){
  describe("isLeapYear", function(){

    context("引数に指定された年が、4で割り切れるが 100 で割り切れない場合", function(){
      it("trueを返す。", function(){
        expect(isLeapYear(1996)).to.be.ok();
        expect(isLeapYear(2004)).to.be.ok();
      });
    });

    context("引数に指定された年が、4で割り切れ、しかも 100 で割り切れるが、400 では割り切れない場合", function(){
      it("falseを返す。", function(){
        expect(isLeapYear(1900)).not.to.be.ok();
      });
    });

    context("引数に指定された年が、4で割り切れ、しかも 400 で割り切れる場合", function(){
      it("trueを返す。", function(){
        expect(isLeapYear(1600)).to.be.ok();
        expect(isLeapYear(2000)).to.be.ok();
      });
    });

    context("上記以外の場合", function(){
      it("falseを返す", function(){
        expect(isLeapYear(2015)).not.to.be.ok();
      });
    });

  });
})();
