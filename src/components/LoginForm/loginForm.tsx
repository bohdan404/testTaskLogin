import logo from '../../image/Logo.svg'
import male from '../../image/male.svg'
import female from '../../image/female.svg'
import other from '../../image/other.svg'
import ChoseGender from './ChoseGender/choseGender'
import s from './loginForm.module.css'
import { useState } from 'react'
import FieldForm from './fieldFofm/fieldForm'

export interface Authorization {
    gender: string
    email: string
    pasword: string
    confirmPasword: string
}

export default function LoginForm () {
    const [authorization, setAuthorization] = useState<Authorization>(
        {
            gender: '',
            email: '',
            pasword: '',
            confirmPasword: ''
        }
    )
    const genderData = [
        {
            title: 'Male',
            img: male
        },
        {
            title: 'Female',
            img: female
        },
        {
            title: 'Other',
            img: other
        }
    ] 

 

    console.log(authorization);
    
    
    return(
        <div className={s.wrap} >
            <div className={s.title} >
                <img src={logo} alt="logo" />
                <p>Sign Up with email</p>
            </div>
            <div className={s.content} >
                <div className={s.genderWrap} >
                    <p>Gender</p>
                    <div className={s.genderForm}>
                        { genderData.map((e) => {
                        return(
                            <div key={Math.random()} >
                                <ChoseGender 
                                     authorization={authorization}
                                     setAuthorization={setAuthorization}
                                     title={e.title} 
                                     img={e.img}

                                />
                            </div>
                        )
                    }) }
                    </div>
                </div>
                <FieldForm
                    authorization={authorization}
                    setAuthorization={setAuthorization}
                />
                <div className={s.nav} >
                    <p>Already have an account? 
                        <a href="#">Log In</a>
                    </p>
                    <p>Review privacy and disclosures  
                        <a href="#">here</a>
                    </p>
                </div>
            </div>
           
            
            
        </div>
    )
}