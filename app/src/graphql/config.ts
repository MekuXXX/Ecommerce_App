import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/api/graphql",
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "src/graphql/types/": {
      plugins: ["typescript", "typescript-resolvers"],
      preset: "client",
      presetConfig: {
        wrapFieldDefinitions: true,
        useIndexSignature: true,
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
