import * as Yup from 'yup';
import { subDays } from 'date-fns'

export default Yup.object().shape({
  titulo: Yup.string().min(2).required(),
  desc: Yup.string().min(3),
  prioridade: Yup.string().required(),
  status: Yup.string().required(),
  prazo: Yup.date().min(subDays(new Date(),1)).required()
})