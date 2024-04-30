import { combineDataProviders } from "react-admin";
import graphQlDataProvider from "ra-data-graphql-simple";
import jsonServerDataProvider from "ra-data-json-server";

export const buildDataProvider = async () => {
  const graphQLDataProvider = await graphQlDataProvider({
    clientOptions: { uri: "http://localhost:3001/" },
  });
  const restDataProvider = jsonServerDataProvider("http://localhost:3002");
  const dataProvider = combineDataProviders((resource) => {
    switch (resource) {
      case "Product":
      case "Category":
        return graphQLDataProvider;
      default:
        return restDataProvider;
    }
  });
  return dataProvider;
};
