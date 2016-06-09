(function(){

  describe("xor", function(){
    context("引数がともに true の場合", function(){
      it("false を返す", function(){
        expect(xor(true, true)).not.to.be.ok();
      });
    });

    context("引数がともに false の場合", function(){
      it("false を返す", function(){
        expect(xor(false, false)).not.to.be.ok();
      });
    });

    context("引数のどちらか一方が true の場合", function(){
      it("true を返す", function(){
        expect(xor(false, true)).to.be.ok();
        expect(xor(true, false)).to.be.ok();
      });
    });

  });

})();
