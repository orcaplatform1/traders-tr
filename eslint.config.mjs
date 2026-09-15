import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // orca/ ayri bir Next.js projesi (kendi eslint/tsconfig'i var), buraya dahil edilmez
    "orca/**",
    "_legacy-landing/**",
    "_uploaded-originals/**",
  ]),
]);

export default eslintConfig;
