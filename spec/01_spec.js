describe("id", function(){
  it("引数に指定された値を返す", function(){
    expect(id(1)).to.be(1);
    expect(id("hello")).to.be("hello");
    expect(id(true)).to.be.ok();
  });
});
