import { spawn } from 'node:child_process';

const children = [];

function start(command, args) {
  const child = spawn(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });

  children.push(child);

  child.on('exit', (code, signal) => {
    if (shutdown.inProgress) {
      return;
    }

    shutdown.inProgress = true;

    for (const currentChild of children) {
      if (!currentChild.killed) {
        currentChild.kill(signal ?? 'SIGINT');
      }
    }

    process.exit(code ?? 1);
  });

  return child;
}

function shutdown() {
  if (shutdown.inProgress) {
    return;
  }

  shutdown.inProgress = true;

  for (const child of children) {
    if (!child.killed) {
      child.kill('SIGINT');
    }
  }
}

shutdown.inProgress = false;

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

start('pnpm', ['exec', 'prisma', 'generate', '--watch']);
start('pnpm', ['exec', 'tsc', '-p', 'tsconfig.json', '--watch', '--preserveWatchOutput']);