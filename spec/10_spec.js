(function(){
  describe("calc", function(){
    context('[1, "+", 1] のような、1 つの足し算のみを計算する場合',
            function(){
              const exp = [1, "+", 1];
              it("足し算を計算する", function(){
                expect(calc(exp)).to.be(2);
              });
            });

    context('[1, "-", 1] のような、1 つの引き算のみを計算する場合',
            function(){
              const exp = [123, "-", 100];
              it("足し算を計算する", function(){
                expect(calc(exp)).to.be(23);
              });
            });

    context('[1, "-", 1, "+", 100] のような、多項式を計算する場合',
            function(){
              const exp = [123, "-", 100, "+", 7, "-", 23];
              it("足し算を計算する", function(){
                expect(calc(exp)).to.be(7);
              });
            });

  });
})();
