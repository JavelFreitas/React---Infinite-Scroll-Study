import { log } from 'console';
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import './styles.scss'

type Inputs = {
    Form1: string,
    Form2: string,
    Li: string
  };
const Counter: FC = () => {    
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    let array = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q"]

    

  return (
    <tr>
      <td>
      <div className="a">
        <input type="checkbox" checked={false} onChange={() => {alert()}}/>
        <input type="checkbox" />
      </div>
      </td>
    </tr>
  );
}

export default Counter;
