"use client"
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { AtSymbolIcon, ExclamationCircleIcon, KeyIcon, UserIcon } from "@heroicons/react/16/solid";
import { Button } from "./ui/button";

/**
 * 
 * @TODO react-hook-form 적용필요
 */

export default function SignupForm(){
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

  return (
    <form className="space-y-3">
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
                                name="name"
                                placeholder="Enter your name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>

                    <div>
                        <label className="block mt-5 text-gray-900 mb-3font-medium" htmlFor="email">
                            이메일
                        </label>
                        <div className="relative">
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div>
                        <label className="block mt-5 mb-3 font-medium text-gray-900" htmlFor="password">
                            비밀번호
                        </label>
                        <div className="relative">
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                required
                                minLength={6}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-[18px] w-[18px]  text-gray-500 peer-focus:text-gray-900"/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block mt-5 mb-3 font-medium text-gray-900" htmlFor="confirmPassword">
                            암호확인
                        </label>
                        <div className="relative">
                            <Input
                                  id="confirmPassword"
                                  type="password"
                                  name="confirmPassword"
                                  placeholder="Confirm password"
                                  required
                                  minLength={6}
                                  value={confirmPassword}
                                  onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    {passwordError && (
                        <div className="mt-2 text-sm text-red-500">{passwordError}</div>
                    )}
            </div>
            <Button className="w-full mt-4 justify-center" variant="default">
                회원가입
            </Button>
        </div>
    </form>
  )
}