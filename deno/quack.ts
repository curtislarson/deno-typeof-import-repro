export async function createDuck(config: { mod: Promise<typeof import("https://deno.land/x/dax@0.12.0/mod.ts")> }) {
  await (await config.mod).$`echo "quack"`;
}

await createDuck({ mod: import("https://deno.land/x/dax@0.12.0/mod.ts") });
