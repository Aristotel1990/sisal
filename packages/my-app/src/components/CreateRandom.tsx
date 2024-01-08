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
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { createRandom } from "../redux/slices/data";

// routes
//

// ----------------------------------------------------------------------

export default function CreateRandom() {
  let [load, setLoad] = useState(false);
  const NewUserSchema = Yup.object().shape({
    // businessName: Yup.string().required('Ploteso emirin e biznesit '),
    // nid: Yup.string().required('Plotëso NIPT-in'),
    // firstName: Yup.string().required('Plotëso emrin'),
    // address: Yup.string().required('Plotëso adresën'),
    // lastName: Yup.string().required('Plotëso mbiemrin'),
    // numberId: Yup.string().required('Plotëso nr e kartës së identitetit'),
    // city: Yup.string().required('Plotëso qytetin'),
    // number: Yup.string().required("Specify a number of monsters"),
    // phoneNumber: Yup.mixed().required('Plotëso nr e telefonit')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      size: 0,
    },
    validationSchema: NewUserSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setLoad(true);

        await createRandom(values);
        alert("moster has been created");

        resetForm();

        setSubmitting(false);
        setLoad(false);
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
    <>
      {load ? <CircularProgress /> : ""}

      <FormikProvider value={formik}>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container margin={2}>
            <Card>
              <Box marginBottom={3}>
                <CardHeader marginB title="Create random monsters" />
              </Box>
              <Stack spacing={3} padding={2}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 3, sm: 2 }}
                >
                  <TextField
                    size="small"
                    fullWidth
                    label="Number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...getFieldProps("size")}
                    error={Boolean(touched.size && errors.size)}
                    helperText={touched.size && errors.size}
                  />
                </Stack>

                <Box
                  sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}
                >
                  <Button type="submit">Create Random</Button>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Form>
      </FormikProvider>
    </>
  );
}
