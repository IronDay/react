import { describe, expect, it } from "vitest";
import { max } from "../src/testable/Intro";

describe("Test of the intro function", () => {
  it("should return the first when it's the max", () => {
    expect(max(4, 2)).toBe(4);
  });

  it("should return the second value if it's the max", () => {
    expect(max(2, 4)).toBe(4);
  });
});
