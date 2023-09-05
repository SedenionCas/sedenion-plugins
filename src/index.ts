import type { PanelPluginManifest } from "sedenion-plugin-types";
import { ExamplePlugin } from "@sedenion/example-plugin";

export const COMMUNITY_PANEL_PLUGINS: PanelPluginManifest[] = [
  {
    name: "Example",
    plugin: new ExamplePlugin(),
    version: "1.0.2",
    enabledByDefault: false,
    authors: [
      {
        name: "Sedenion team",
        profile: "https://github.com/SedenionCas",
      },
    ],
  },
];
