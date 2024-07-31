"use client"
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { AtSymbolIcon, ExclamationCircleIcon, KeyIcon, UserIcon } from "@heroicons/react/16/solid";
import { Button } from "./ui/button";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

/**
 * 
 * @TODO react-hook-form 적용필요
 */

const validationSchemaFormSignUp = Yup.object().shape({
    name: Yup.string().required("이름은 필수 값입니다."),
    email: Yup.string().email("이메일 형식이 올바르지 않습니다.").required("이메일은 필수값입니다."),
    password: Yup.string().min(6, "비밀번호는 최소 6자리 이상이어야 합니다.").required("비밀번호는 필수값입니다."),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], '비밀번호가 일치하지 않습니다.').required("비밀번호를 확인해주세요."),
  });

export default function SignupForm(){

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validationSchemaFormSignUp)
    })

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    // 비밀번호와 확인 비밀번호가 동일한지 확인
    if (password !== confirmPassword && confirmPassword !== '') {
      setPasswordError('Passwords do not match.');
    } else {
      setPasswordError('');
    }
  }, [password, confirmPassword]);

  const handleOnSubmit = (data:any) => {
    console.log("----")
    console.log(data);
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="flex-1 px-6 pt-8 pb-4 rounded-lg bg-gray-50">
            <h1 className="mb-3 text-2xl">
                회원가입
            </h1>
            <div className="w-full">
                    <div>
                        <label className="block mt-5 mb-3 font-medium text-gray-900 text-md" htmlFor="name">
                            이름
                        </label>
                        <div className="relative">
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                {...register(('name'))}
                            />
                            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        {errors["name"] && <div>{errors.name.message}</div>}
                    </div>

                    <div>
                        <label className="block mt-5 text-gray-900 mb-3font-medium" htmlFor="email">
                            이메일
                        </label>
                        <div className="relative">
                            <Input
                                id="email"
                                type="text"
                                placeholder="Enter your email address"
                                {...register('email')}
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        {errors["email"] && <div>{errors.email.message}</div>}
                    </div>
                    <div>
                        <label className="block mt-5 mb-3 font-medium text-gray-900" htmlFor="password">
                            비밀번호
                        </label>
                        <div className="relative">
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter Password"
                                {...register('password')}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-[18px] w-[18px]  text-gray-500 peer-focus:text-gray-900"/>
                        </div>
                        {errors["password"] && <div>{errors.password.message}</div>}
                    </div>
                    <div className="mt-4">
                        <label className="block mt-5 mb-3 font-medium text-gray-900" htmlFor="confirmPassword">
                            암호확인
                        </label>
                        <div className="relative">
                            <Input
                                  id="confirmPassword"
                                  type="password"
                                  placeholder="Confirm password"
                                  {...register("confirmPassword")}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        {errors["confirmPassword"] && <div>{errors.confirmPassword.message}</div>}
                    </div>
            </div>
            <Button className="w-full mt-4 justify-center" variant="default" type="submit">
                회원가입
            </Button>
        </div>
    </form>
  )
}