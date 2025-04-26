import { useState } from "react";
import axios from 'axios';

const validate = (formValues) => {
    const errors = {};
    if (!formValues.givenName) {
        errors.givenName = "Name is required";
    }
    if (!formValues.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
        errors.email = "Email address is invalid";
    }
    if (!formValues.jobTitle) {
        errors.jobTitle = "Job title is required";
    } 
    if (!formValues.phoneNumber) {
        errors.phoneNumber = "Phone number is required";
    }

    return errors;
};

const useController = () => {
    const [qrCode, setQrCode] = useState();
    const [pdfUrl, setPdfUrl] = useState();
    const [errors, setErrors] = useState();

    const onSubmit = async (event) => {
        console.log("onSubmit ran");
        event.preventDefault();
        setErrors({});
        const form = event.target;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());
        const validationErrors = validate(formValues);
        for (const [key, value] of formData) {
            console.log(key, value);
        }
        console.log(formValues);
        console.log(validationErrors)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        console.log("passed errors");
        const response = await axios.post("http://localhost:9000/qr-code/generate", formValues);
        setQrCode(response.data.qrCodeUrl);
        setPdfUrl(response.data.pdfUrl);
        console.log("passed await");
        console.log("qrcodeurl : ", qrCode);
        form.reset();
    };

    return {
        qrCode,
        pdfUrl,
        errors,
        onSubmit,
    };
}

export default useController;
