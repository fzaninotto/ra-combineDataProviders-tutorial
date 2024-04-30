import { useState, useEffect } from "react";
import { Admin, Resource, DataProvider } from "react-admin";

import { buildDataProvider } from "./dataProvider";
import products from "./products";
import customers from "./customers";
import orders from "./orders";

export const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider | undefined>(
    undefined
  );
  useEffect(() => {
    buildDataProvider().then((provider) => setDataProvider(() => provider));
  }, []);

  if (!dataProvider) {
    return <div>Loading</div>;
  }

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="Product" {...products} />
      <Resource name="Category" recordRepresentation="name" />
      <Resource name="customers" {...customers} />
      <Resource name="commands" {...orders} />
    </Admin>
  );
};
