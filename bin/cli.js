#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const rawArgs = process.argv.slice(2);

let command = "create";
let projectName;

if (rawArgs[0] === "create" || rawArgs[0] === "install") {
  command = rawArgs[0];
  projectName = rawArgs[1];
} else {
  projectName = rawArgs[0];
}

if (!projectName) {
  projectName = "my-chesshacks-bot";
}

if (command === "install") {
  console.log("Install command is not implemented yet.");
  process.exit(0);
}

const projectPath = path.join(process.cwd(), projectName);

fs.mkdirSync(projectPath, { recursive: true });

fs.writeFileSync(
  path.join(projectPath, "main.py"),
  'def main():\n    print("Hello, World!")\n\nif __name__ == "__main__":\n    main()\n'
);

fs.writeFileSync(path.join(projectPath, "requirements.txt"), "");

fs.writeFileSync(
  path.join(projectPath, "README.md"),
  `# ${projectName}\n\nA ChessHacks bot.\n`
);

console.log(`✅ Created ${projectName}`);
