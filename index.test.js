const main = require("./index.js");

test("4 -> empat ", () => {
  expect(main(4)).toBe("empat");
});

test("27 -> dua puluh tujuh ", () => {
  expect(main(27)).toBe("dua puluh tujuh");
});

test("102 -> seratus dua ", () => {
  expect(main(102)).toBe("seratus dua");
});

test("38079 -> tiga puluh delapan ribu tujuh puluh sembilan ", () => {
  expect(main(38079)).toBe("tiga puluh delapan ribu tujuh puluh sembilan");
});

test("82102713 -> delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas ", () => {
  expect(main(82102713)).toBe("delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas");
});
