import { promisify } from "node:util";
import { exec as _exec } from "node:child_process";
const exec = promisify(_exec);

const additionalArgs = process.argv.slice(2);

let commitHash = "";

exec("git log -1 --pretty=format:%h")
	.then(({ stdout }) => {
		commitHash = stdout;
	})
	.then(() =>
		exec(
			[
				`gh-pages --nojekyll -d dist -m "base: ${commitHash}"`,
				...additionalArgs,
			].join(" "),
		),
	);
