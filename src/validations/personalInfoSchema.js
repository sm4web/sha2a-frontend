import * as Yup from 'yup'


export default Yup.object({
    username: Yup.string().required(),
})