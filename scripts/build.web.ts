import { rm } from "node:fs/promises";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { promisify } from "node:util";
import { exec as _exec } from "node:child_process";
const exec = promisify(_exec);

const appJsonString = readFileSync("./app.json").toString();
const appJson = JSON.parse(appJsonString);
const baseAppJson = JSON.parse(appJsonString);

if (!process.env.CI) {
	console.log("Updating app.json");
	if (existsSync("./dist")) {
		rm("./dist", { recursive: true });
	}

	appJson.expo.experiments.baseUrl = "";

	writeFileSync("./app.json", JSON.stringify(appJson));
}

exec("expo export -p web")
	.then(() => {
		if (!process.env.CI) {
			console.log("Reverting app.json");
			writeFileSync("./app.json", JSON.stringify(baseAppJson));
		}
	})
	.finally(() => exec("npx prettier --write app.json"));
