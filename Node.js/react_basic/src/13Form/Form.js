import {useForm} from 'react-hook-form';

export default function Form() {
    const { register,handleSubmit, formState: {errors}, watch } = useForm();
    
    //handleSubmit() : 두 개의 함수를 받는데 하나는 유효할 때 실행되는 함수(필수), 하나는ㄴ 유효하지 않을 때 실행되는 함수(선택)
    const onValid = (data) => {
        console.log("onValid", data);
    };
    // const onInValid = (err) => {
    //     console.log("onInValid", err);
    // };

    console.log('erros',errors);
    // console.log('watch',watch('username')); //사용가능한 아이디입니다 같은 형식의 바로 피드백을 할 수 있다.

    return (
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input type='text' {...register('username', 
                {required: '이름을 입력하세요', 
                minLength: {message: '최소 2글자 이상 작성하세요', value: 2},
                })}
                placeholder='username'
                />
                {errors.username?.message}
                <br />
                <input type='text' {...register('email', 
                {required: '이메일을 입력하세요', 
                validate: { useGmail: (v) => v.includes('gmail.com') || 'gmail로만 가입가능합니다' }})} 
                placeholder='email'/>
                {errors.email?.message}
                <br />
                <input type='text'{...register('password')} placeholder='password'/>
                <br /> 
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}