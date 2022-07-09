import React, {useState} from "react";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import {Card, CardActive, ContainerStyle, ContentContainer, Title, UTypeSubmitButton,} from "./style";
import SeekingIcon from '../../assets/icons/seeking-icon.png'
import OfferingIcon from '../../assets/icons/offering-icon.png'
import {Helmet} from "react-helmet";

const UserTypeForm = () => {
    const [active, setActive] = useState("");

    const Options = [
        {label: "Seeking", img: SeekingIcon, id: "seeking"},
        {
            label: "Offering",
            img: OfferingIcon,
            id: "offering",
        },
    ];

    return (
        <Box sx={ContainerStyle}>
            <Helmet>
                <title>Seeking or Offering - Sha2a Real Estate </title>
            </Helmet>
            <Box sx={ContentContainer}>
                <Grid container alignItems={"center"} spacing={6}>
                    <Grid item container justifyContent={"center"} xs={12}>
                        <Typography variant={"h1"} sx={Title}>
                            Select What you’re looking for ..
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent={"center"} xs={12} gap={4}>
                        {Options.map((card) => (
                            <Box
                                key={card.id}
                                onClick={() => setActive(card.id)}
                                sx={
                                    active === card.id ? {...Card, ...CardActive} : {...Card}
                                }
                            >
                                <img src={card.img} alt=""/>
                                {card.label}
                            </Box>
                        ))}
                    </Grid>
                    <Grid item container justifyContent={"start"} xs={12}>
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                                What Are You looking for ..{" "}
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="rent"
                                    control={<Radio/>}
                                    label="Want to rent "
                                />
                                <FormControlLabel
                                    value="buy"
                                    control={<Radio/>}
                                    label="Want to buy"
                                />
                                <FormControlLabel
                                    value="student"
                                    control={<Radio/>}
                                    label="Search for student house"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item container xs={12}>
                        <Button variant="contained" sx={UTypeSubmitButton}>
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default UserTypeForm;
