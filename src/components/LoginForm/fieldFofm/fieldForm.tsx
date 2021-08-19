
import s from './fieldForm.module.css'
import eye from '../../../image/eye.svg'
import { useState } from 'react'
import { Authorization } from '../loginForm'

interface Props {
    setAuthorization: (value: Authorization) => void
    authorization: Authorization
}
export default function FieldForm ({setAuthorization, authorization}: Props) {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setConfirmShowPassword] = useState<boolean>(false)
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isPasswordRight = authorization.confirmPasword && (authorization.confirmPasword !== authorization.pasword)
    const submitEmail = (event: string) => {
        setAuthorization({
       ...authorization,
       email: event
     })
    }
    const createPassword = (event: string) => {
        setAuthorization({
       ...authorization,
       pasword: event
     })
    }
    const confirmPassword = (event: string) => {
        setAuthorization({
       ...authorization,
       confirmPasword: event
      })
    }

    const authoraze = () => {
        if(
            authorization.pasword.length > 6 &&
            authorization.confirmPasword.length > 6 &&
            isPasswordRight &&
            re.test(authorization.email)
            
        ){
            
            alert(  'gender = ' + authorization.gender + " " +
            'email = ' + authorization.email  + " " +
            'password = ' + authorization.pasword  + " " +
            'confirm password = ' + authorization.confirmPasword  + " "
            
            )
        }
    } 
console.log(authorization );

    return (
        <div className={s.formWrap} >
            <div className={s.inputField} >
                <p>E-mail</p>
                    <input
                    style={ authorization.email.length > 4 && !re.test(authorization.email) ? {border: "1px solid #D23737", color: " #D23737"} : {}}
                    type="email" 
                    autoComplete="email"
                    onChange={(event) => {
                        submitEmail(event?.target.value)
                    }}
                    />
                    {!re.test(authorization.email) && authorization.email.length > 4 && <span className={s.invalid} >Invalid email</span>}
            </div>
            <div className={s.passwordField} >
                <p>Create Password</p>
                <div
                    style={authorization.pasword.length < 6 ? {border: "1px solid #D23737"} : {} }
                >
                    <input type={ showPassword ? "text" : "password"}
                     
                      onChange={(event) => {
                          createPassword(event?.target.value)
                        }}
                    />
                    <img src={eye} alt="eye"
                        onClick={() => {
                            setShowPassword(!showPassword)
                        }}
                    />
                </div>
                {authorization.pasword.length < 6 &&  <span className={s.invalid} >Short passowr</span>}
            </div>
            <div className={s.passwordField} >
                <p>Confirm Password</p>
                <div style={isPasswordRight ? {border: "1px solid #D23737"} : {}} >
                    <input type={ showConfirmPassword ? "text" : "password"}
                        onChange={(event) =>{
                            confirmPassword(event?.target.value)
                        }}
                    />
                    <img src={eye} alt="eye"
                        onClick={() => {
                            setConfirmShowPassword(!showConfirmPassword)
                        }}
                    />
                </div>
               { isPasswordRight && 
                    <span className={s.invalid} >Invalid passowr</span>
               }
            </div>
            <button
                onClick={() => authoraze()}
            >
                Sign Up
            </button>
        </div>
    )
}