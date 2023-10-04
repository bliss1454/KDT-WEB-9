import {useForm} from 'react-hook-form';

export default function Form() {
    const { register,handleSubmit, formState: {errors} } = useForm();
    
    const onValid = (data) => {
        console.log("onValid", data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input type='text' {...register('username', 
                {required: '이름을 입력하세요', 
                minLength: {message: '이름은 필수 항목입니다.', value: 2},
                })}
                placeholder='username'
                />
                {errors.username?.message}
                <br />
                <input type='number' {...register('age', 
                {required: '나이를 입력하세요', 
                min: {
                    value: 1,
                    message: '0 이상의 숫자만 가능합니다.'
                  }
                })}
                placeholder='age'/>
                {errors.age?.message}
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}