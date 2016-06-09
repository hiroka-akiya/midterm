(function(){
  describe("distance", function(){
    const d = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    const a = {x: 1, y: 0};
    const b = {x: 1, y: 1};
    const c = {x: 2, y: 7};

    context("同じ点が指定された場合", function(){
      it("0 を返す", function(){
        expect(distance(c, c)).to.be(0);
      });
    });

    context("異なる点が指定された場合", function(){
      it("2点間のマンハッタン距離を返す", function(){
        expect(distance(a, c)).to.be(d(a, c));
        expect(distance(b, c)).to.be(d(b, c));
      });
    });

  });
})();
