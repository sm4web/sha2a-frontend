import * as Yup from 'yup'


export default Yup.object({
    username: Yup.string().required(),
    phone_number: Yup.number().required(),
})