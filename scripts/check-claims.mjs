// Runs the career toolkit's claim check against this checkout: every figure in data/,
// components/, app/ and the résumé PDF must exist in the toolkit's master facts.
// The pre-commit hook and `npm run deploy` both run it. The toolkit checkout is named by
// `git config career.toolkit`; without it the check fails rather than being skipped.
import { execFileSync, spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = fileURLToPath(new URL('..', import.meta.url));

let toolkit = '';
try {
    toolkit = execFileSync('git', ['-C', repo, 'config', '--get', '--type=path', 'career.toolkit'], {
        encoding: 'utf8',
    }).trim();
} catch (error) {
    // git exits 1 when the key is unset, and the message below says what to do; any other
    // failure (git missing, an unreadable config) is reported as it is.
    if (error.status !== 1) {
        console.error(`check-claims: git config failed: ${error.message}`);
        process.exit(1);
    }
}
if (!toolkit) {
    console.error('check-claims: set `git config career.toolkit <path to the career-toolkit checkout>`.');
    process.exit(1);
}

// The first interpreter that runs and is Python 3.10 or later; "python3" is the usual name on
// Linux and macOS, "python" on Windows.
const python = ['python3', 'python'].find(
    name => spawnSync(name, ['-c', 'import sys; sys.exit(sys.version_info < (3, 10))']).status === 0,
);
if (!python) {
    console.error('check-claims: no python3 or python of version 3.10 or later on PATH.');
    process.exit(1);
}

const check = join(toolkit, 'scripts', 'check-public-claims.py');
const result = spawnSync(python, ['-I', check, '--surface', 'portfolio', '--portfolio', repo], {
    stdio: 'inherit',
});
if (result.error) {
    console.error(`check-claims: could not run ${check}: ${result.error.message}`);
    process.exit(1);
}
process.exit(result.status ?? 1);
