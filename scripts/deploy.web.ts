import { exec } from "node:child_process";

const additionalArgs = process.argv.slice(2);

let commitHash = "";

exec("git log -1 --pretty=format:%h", (error, out, err) => {
	commitHash = out;
});

exec(
	[
		`gh-pages --nojekyll -d dist -m "base: ${commitHash}"`,
		...additionalArgs,
	].join(" "),
);
