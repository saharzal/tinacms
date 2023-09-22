import { defineConfig } from "tinacms";
export default defineConfig({
  contentApiUrlOverride: "/api/gql",
  clientId: "82e3057e-683e-4756-8e32-a22ad613944a",  
  admin: {
    auth: {
      useLocalAuth: true,
    },
  },
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
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "test_page") {
              return `/`;
            }
            return undefined;
          },
        },
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
