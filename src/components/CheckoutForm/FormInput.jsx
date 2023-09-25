import React from "react";

import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@mui/material";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        label={label}
        defaultValue=""
        required
        render={({ field }) => (
          <TextField
            defaultValue=""
            fullWidth
            name={name}
            label={label}
            required
            {...field}
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;
