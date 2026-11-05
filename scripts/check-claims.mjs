// Runs the career toolkit's claim check against this checkout: every figure in data/,
// components/, app/ and the résumé PDF must exist in the toolkit's master facts.
// The pre-commit hook and `npm run deploy` both run it. The toolkit checkout is named by
// `git config career.toolkit`; without it the check fails rather than being skipped.
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

let toolkit = '';
try {
    toolkit = execFileSync('git', ['config', '--get', 'career.toolkit'], { encoding: 'utf8' }).trim();
} catch {
    // git exits 1 when the key is unset; the message below says what to do.
}
if (!toolkit) {
    console.error('check-claims: set `git config career.toolkit <path to the career-toolkit checkout>`.');
    process.exit(1);
}
try {
    execFileSync('python', ['-I', join(toolkit, 'scripts', 'check-public-claims.py'), '--portfolio', process.cwd()], {
        stdio: 'inherit',
    });
} catch (error) {
    process.exit(error.status ?? 1);
}
