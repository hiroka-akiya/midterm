(function(){
  const f = "fizz";
  const b = "buzz";
  const fb = "fizzbuzz";


  describe("fizzbuzz", function(){
    context("引数が 3 の倍数の場合", function(){
      it("fizz という文字列を返す", function(){
        expect(fizzbuzz(21)).to.be(f);
      });
    });
    context("引数が 5 の倍数の場合", function(){
      it("buzz という文字列を返す", function(){
        expect(fizzbuzz(20)).to.be(b);
      });
    });
    context("引数が 3 の倍数で、しかも 5 の倍数の場合", function(){
      it("fizzbuzz という文字列を返す", function(){
        expect(fizzbuzz(60)).to.be(fb);
      });
    });
    context("それ以外", function(){
      it("引数の数値を返す", function(){
        expect(fizzbuzz(1)).to.be(1);
      });
    });
  });
})();
