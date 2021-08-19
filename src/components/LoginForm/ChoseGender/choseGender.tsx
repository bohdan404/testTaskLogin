
import { Authorization } from '../loginForm';
import s from './choseGender.module.css'
interface Props {
    title: string
    img: string
    authorization: Authorization
    setAuthorization: (value: Authorization) => void
}
export default function ChoseGender ({title, img, setAuthorization, authorization}:Props) {

    const choseGender = () => {
        setAuthorization({
            ...authorization,
            gender: title
        })
    }
    const genderChosed = authorization.gender === title

    return (
        <div className={genderChosed ? s.genderElemActive : s.genderElem} 
            onClick={() => {
                choseGender()
            }}
        >
            <img src={img} alt="gender"/>
            <p>
                {title}
            </p>
        </div>
    )
}