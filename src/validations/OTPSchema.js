import * as Yup from 'yup'


export default Yup.object({
    otp: Yup.string().min(6).max(6).required(),
})