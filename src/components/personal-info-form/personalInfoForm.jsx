import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import UploadPicture from "../upload-profile-picture/UploadPicture";
import {
  PInfoCustomDropDown,
  PInfoForm,
  PInfoFormContent,
  PInfoStyle,
  PInfoSubmitButton,
} from "./style";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useDispatch } from "react-redux";
import { userUpdate } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initValues = { profile_photo: "" };

const PersonalInfoForm = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const dispatch = useDispatch();
  const router = useNavigate();

  const onNextStep = (values) => {
    const newValues = { ...values, router };
    dispatch(userUpdate(newValues));
  };

  return (
    <Box sx={PInfoStyle}>
      <Box sx={PInfoForm}>
        <Formik
          initialValues={initValues}
          onSubmit={(values) => {
            onNextStep(values);
          }}
        >
          {({ values }) => (
            <Form style={PInfoFormContent}>
              <UploadPicture name={"profile_photo"} />
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { lg: "20px", xs: "16px" },
                    fontFamily: "GiloryMedium",
                  }}
                >
                  Country
                </Typography>
                <CountryDropdown
                  value={country}
                  style={PInfoCustomDropDown}
                  onChange={(value) => {
                    setCountry(value);
                    values.country = value;
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { lg: "20px", xs: "16px" },
                    fontFamily: "GiloryMedium",
                  }}
                >
                  State
                </Typography>
                <RegionDropdown
                  country={country}
                  value={region}
                  style={PInfoCustomDropDown}
                  onChange={(value) => {
                    setRegion(value);
                    values.city = value;
                  }}
                />
              </Box>
              <Button
                type={"submit"}
                sx={PInfoSubmitButton}
                variant={"contained"}
              >
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default PersonalInfoForm;
