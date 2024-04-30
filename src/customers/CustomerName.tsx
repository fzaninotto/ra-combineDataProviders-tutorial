import { TextField, WithRecord } from "react-admin";
import { Avatar, Stack } from "@mui/material";

export const CustomerName = () => (
  <Stack direction="row" alignItems="center" gap={0.5}>
    <WithRecord
      render={(record) => (
        <Avatar
          src={record.avatar}
          style={{ width: 25, height: 25, marginRight: 5 }}
          alt={`${record.first_name} ${record.last_name}`}
        />
      )}
    />
    <TextField source="first_name" />
    <TextField source="last_name" />
  </Stack>
);
