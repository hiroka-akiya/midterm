(function(){
  const zero = "";
  const hello = "hello";
  const space = " ";

  describe("strlen", function(){
    it("文字列の長さを返す", function(){
      expect(strlen(zero)).to.be(zero.length);
      expect(strlen(hello)).to.be(hello.length);
    });
  });

  describe("concat", function(){
    it("第一引数の後に、第二引数の文字列を結合した文字列を返す",
       function(){
         expect(concat(zero, hello)).to.be(zero + hello);
         expect(concat(hello, space)).to.be(hello + space);
       });
  });

})();
