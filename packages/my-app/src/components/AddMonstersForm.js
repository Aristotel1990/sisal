import * as Yup from "yup";
import { useState } from "react";

// import { useSnackbar } from 'notistack';
import { useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";
// material
// import { LoadingButton, DateTimePicker } from '@mui/lab';
import {
  Box,
  Card,
  Grid,
  Stack,
  CardHeader,
  TextField,
  Alert,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "../redux/store";
import { createMonster } from "../redux/slices/data";

// routes
//

// ----------------------------------------------------------------------
const countries = [
  { id: 1, name: "vlore" },
  { id: 2, name: "dures" },
];
export default function AddMonstersForm() {
  const { species } = useSelector((state) => state.data);
  const listSpecies = Object.values(species);

  const NewUserSchema = Yup.object().shape({
    // businessName: Yup.string().required('Ploteso emirin e biznesit '),
    // nid: Yup.string().required('Plotëso NIPT-in'),
    // firstName: Yup.string().required('Plotëso emrin'),
    // address: Yup.string().required('Plotëso adresën'),
    // lastName: Yup.string().required('Plotëso mbiemrin'),
    // numberId: Yup.string().required('Plotëso nr e kartës së identitetit'),
    // city: Yup.string().required('Plotëso qytetin'),
    name: Yup.string().required("Name is required"),
    // phoneNumber: Yup.mixed().required('Plotëso nr e telefonit')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      species: "",
      name: "",
      level: 0,
      subSpecieId: "",
    },
    validationSchema: NewUserSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await createMonster(values);
        // alert("Monster is created");
        resetForm();
        setSubmitting(false);
      } catch (error) {
        console.error(error);
        setSubmitting(false);
      }
    },
  });

  const {
    errors,
    values,
    touched,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    getFieldProps,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container margin={2}>
          <Card>
            <Box marginBottom={3}>
              <CardHeader marginB title="Create new monster" />
            </Box>
            <Stack spacing={3} padding={2}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 3, sm: 2 }}
              >
                <TextField
                  fullWidth
                  size="small"
                  label="Name"
                  {...getFieldProps("name")}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Level"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...getFieldProps("level")}
                  error={Boolean(touched.level && errors.level)}
                  helperText={touched.level && errors.level}
                />
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 3, sm: 2 }}
              >
                <TextField
                  select
                  fullWidth
                  size="small"
                  label="Species"
                  placeholder="Species"
                  {...getFieldProps("species")}
                  SelectProps={{ native: true }}
                  error={Boolean(touched.species && errors.species)}
                  helperText={touched.species && errors.species}
                  onChange={(event) => {
                    setFieldValue("species", event.target.value);
                  }}
                >
                  <option value="" />

                  {listSpecies?.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </TextField>

                <TextField
                  select
                  fullWidth
                  size="small"
                  label="Subspecies"
                  placeholder="Subspecies"
                  {...getFieldProps("subSpecieId")}
                  SelectProps={{ native: true }}
                  error={Boolean(touched.subSpecieId && errors.subSpecieId)}
                  helperText={touched.subSpecieId && errors.subSpecieId}
                >
                  <option value="" />

                  {values.species &&
                    listSpecies
                      .find(
                        (i) => i.id.toString() === values.species.toString()
                      )
                      .subSpecies.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                </TextField>
              </Stack>

              <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                <Button type="submit">Create Monster</Button>
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
