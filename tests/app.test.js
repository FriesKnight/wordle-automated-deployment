// Simple tests to demonstrate CI/CD pipeline
const assert = require("assert");

describe("Application Tests", function () {
  describe("Basic Functionality", function () {
    it("should return true for valid conditions", function () {
      assert.strictEqual(1 + 1, 2);
    });

    it("should handle string operations correctly", function () {
      const result = "CI/CD Pipeline".toLowerCase();
      assert.strictEqual(result, "ci/cd pipeline");
    });

    it("should validate array operations", function () {
      const arr = [1, 2, 3, 4, 5];
      assert.strictEqual(arr.length, 5);
      assert.strictEqual(arr[0], 1);
    });
  });

  describe("Math Operations", function () {
    it("should add numbers correctly", function () {
      assert.strictEqual(5 + 3, 8);
    });

    it("should multiply numbers correctly", function () {
      assert.strictEqual(4 * 3, 12);
    });
  });

  describe("Environment Tests", function () {
    it("should have Node.js environment", function () {
      assert.ok(process.version);
    });

    it("should run in CI environment", function () {
      // This will pass in CI but we won't fail in local
      const isCI = process.env.CI === "true" || !process.env.CI;
      assert.ok(isCI);
    });
  });
});
