import React from "react";

test("true", () => {
  const vrais: boolean = true;
  expect(vrais).toBe(true);
});

test("false", () => {
  const faux: boolean = false;
  expect(faux).toBe(false);
});
