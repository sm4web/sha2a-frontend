import * as Yup from 'yup'


export default Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6)
})