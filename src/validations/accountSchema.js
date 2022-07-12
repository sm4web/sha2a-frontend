import * as Yup from 'yup'

const regex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g
export default Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(3),
    phone: Yup.string().max(11).matches(regex, 'phone number must be valid.')
})