import * as Yup from 'yup'


export default Yup.object({
    name: Yup.string().required(),
})