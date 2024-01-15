const { exec } = require("node:child_process");
const { readFile } = require("node:fs/promises");
const { join } = require("node:path");
const { promisify } = require("node:util");

describe("Gilded Rose", () => {
  it("produces the expected output", async () => {
    const expected = await readFile(join(__dirname, "..", "src", "stdout.gr"), "utf8");

    const { stdout, stderr } = await promisify(exec)("node src/texttest_fixture.js 30", { cwd: join(__dirname, "..") });

    expect(stderr).toBe("");
    expect(stdout.trim()).toBe(expected.trim());
  });
});
