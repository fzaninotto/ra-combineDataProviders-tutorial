import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
  ImageField,
} from "react-admin";

export const ProductList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ImageField
        source="thumbnail"
        sx={{
          "& .RaImageField-image": {
            width: "auto",
            margin: 0,
          },
        }}
      />
      <TextField source="reference" />
      <NumberField source="width" />
      <NumberField source="height" />
      <NumberField source="price" />
      <ReferenceField source="category_id" reference="Category" />
      <NumberField source="stock" />
      <NumberField source="sales" />
    </Datagrid>
  </List>
);
