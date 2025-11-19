import { Command } from "commander";
import { registerCommands } from "./commands/index.js";

const plugin = {
  name: "plugin-cloud-infra",
  version: "0.1.0",
  install(cli: Command) {
    let toolsCmd = cli.commands.find(cmd => cmd.name() === "tools");
    if (!toolsCmd) toolsCmd = cli.command("tools");

    let cmd = toolsCmd.commands.find(cmd => cmd.name() === "plugin-cloud-infra");
    if (!cmd) cmd = toolsCmd.command("plugin-cloud-infra");

    registerCommands(cmd, { prefix: "", plugin: "plugin-cloud-infra" });
  },
};

export default plugin;
