import {Plugin} from "vite";

export default function dependencyManifest({dependencies = {}}: dependencyManifestPluginOptions): Plugin {
    return ({
        name: "vite-plugin-dependency-manifest",
        config: (config) => {
            const {build} = config

            if (!build) throw new Error("build is not defined in config")

            const rollupOptions = {...build.rollupOptions}
            rollupOptions.external = [...Object.keys(dependencies)]
            config.build!.rollupOptions = rollupOptions
        },
        buildEnd() {
            this.emitFile({
                type: "asset",
                fileName: "externals.json",
                source: JSON.stringify(dependencies)
            })

        }
    })
}

interface dependencyManifestPluginOptions {
    dependencies: Record<string, string>
}