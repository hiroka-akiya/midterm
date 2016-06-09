function KingakuStr_(vv,yen) {
            var kins = vv.toString();
            var l = kins.length;
            var k = Math.round((l-1) / 3 - 0.5);
            if (yen != "" && kins != "") {
                kins = yen+kins;
            }
            return k;
        }