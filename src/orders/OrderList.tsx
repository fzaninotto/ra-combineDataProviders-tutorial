import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CustomerName } from "../customers/CustomerName";

export const OrderList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="reference" />
      <DateField source="date" />
      <ReferenceField reference="customers" source="customer_id" link="show">
        <CustomerName />
      </ReferenceField>
      <NumberField source="basket.length" label="Nb items" />
      <NumberField
        source="total_ex_taxes"
        options={{ style: "currency", currency: "EUR" }}
      />
      <NumberField
        source="delivery_fees"
        options={{ style: "currency", currency: "EUR" }}
      />
      <NumberField
        source="taxes"
        options={{ style: "currency", currency: "EUR" }}
      />
      <NumberField
        source="total"
        options={{ style: "currency", currency: "EUR" }}
      />
      <TextField source="status" />
      <BooleanField source="returned" />
    </Datagrid>
  </List>
);
