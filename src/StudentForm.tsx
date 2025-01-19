import { FC } from "react";
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
    age: z.number({invalid_type_error:"Age is requiered"}).min(18, { message: "Age must be at least 18 years old" }),
})

type FormData = z.infer<typeof schema>
  
const StudentForm: FC = () => {  
    const { register, handleSubmit, formState } = useForm<FormData>({resolver: zodResolver(schema)})
    console.log("StudentForm rendered")

    const onSubmit = (data: FormData) => {
        console.log("Form submitted")
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="m-3">
                <label htmlFor="name" className="form-label"> Name:</label>
                <input id="name" type="text" className="form-control" {...register("name")}/>
                {formState.errors.name && <div className="alert alert-danger">{formState.errors.name.message}</div>}


                <label htmlFor="age" className="form-label"> Age:</label>
                <input id="age" type="number" className="form-control" {...register("age", {valueAsNumber:true})} />
                {formState.errors.age && <div className="alert alert-danger">{formState.errors.age.message}</div>}        
                <button type="submit" className="btn btn-primary m-3">Submit</button>
            </div>

        </form>
    )
}

    export default StudentForm;