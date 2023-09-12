import { defineConfig } from "tinacms";
export default defineConfig({
  branch: "",
  clientId: "",
  token: "",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "desc",
            label: "Description",
          },
        ],
      },
    ],
  },
});
