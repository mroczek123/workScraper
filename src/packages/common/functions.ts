export function getEnvVariable(name: string): string {
  const val = process.env[name];
  if (!val) {
    throw Error(`No enviroment variable ${name} set. Exiting...`);
  }
  return val;
}
