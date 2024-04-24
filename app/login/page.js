'use client'

import { useForm } from 'react-hook-form'
export default function App () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = data => {
    console.log(data)
  } // your form submit function which will invoke after successful validation

  console.log(watch('First Name')) // you can watch individual input by pass the name of the input

  return (
    <div className='flex flex-col  absolute w-full h-full gap-10 justify-center items-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-5 h-fit w-fit bg-green-400 p-3 rounded-md text-center'
      >
        <h1 className='mb-6 text-2xl'>Iniciar Sessió</h1>
        <input
          {...register('First Name', { required: 'true' })}
          placeholder='Nom'
        />
        <input
          {...register('Surnames', { required: 'true' })}
          placeholder='Cognoms'
        />
        <input
          {...register('Mail', { required: 'true' })}
          placeholder='e-mail'
        />
        <select
          {...register('School', { required: 'true' })}
          placeholder='centre'
        >
          <option value='Ins Badalona VII'>Ins Badalona VII</option>
          <option value='Ins La Llauna'>Ins La Llauna</option>
          <option value='Ins Maristes Champagnat'>
            Ins Maristes Champagnat
          </option>
          <option value='Ins Pompeu Fabra'>Ins Pompeu Fabra</option>
        </select>

        {errors.exampleRequired && <p>This field is required</p>}

        <input type='submit' />
      </form>
    </div>
  )
}
