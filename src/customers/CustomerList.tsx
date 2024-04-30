import {
  Datagrid,
  DateField,
  EmailField,
  List,
  NumberField,
  TextField,
} from "react-admin";

export const CustomerList = () => (
  <List
    filter={{ has_ordered: true }}
    sort={{ field: "latest_purchase", order: "DESC" }}
  >
    <Datagrid rowClick="show">
      <TextField source="first_name" />
      <TextField source="last_name" />
      <EmailField source="email" />
      <TextField source="city" />
      <NumberField source="nb_commands" label="Nb orders" />
      <NumberField source="total_spent" />
      <DateField source="latest_purchase" />
    </Datagrid>
  </List>
);
