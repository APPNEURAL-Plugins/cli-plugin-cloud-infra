import { Command } from "commander";
import chalk from "chalk";

function handleError(error: any) {
  const msg = error instanceof Error ? error.message : String(error);
  console.error(chalk.red("[plugin-cloud-infra] " + msg));
}

export function registerCommands(cli: Command, _options: { prefix: string; plugin: string }) {
  cli
    .command("hello <name>")
    .description("Test command for plugin-cloud-infra")
    .action((name) => {
      try {
        console.log(chalk.green(`Hello, ${name} from plugin-cloud-infra!`));
      } catch (err) {
        handleError(err);
      }
    });
}
