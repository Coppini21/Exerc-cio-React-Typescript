import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom";
import instance from "../../utilities/instanceAxios";
import { CardDetails, DivIconBack } from "./styles"
import { FiCornerUpLeft } from "react-icons/fi";

interface Users {
    name: string;
    avatar_url: string;
    id: string;
    login: string;
    bio: string;
    location: string,
    public_repos: number,
    followers: number,
    following: number
}

export default function Details(){
    const { login } = useParams<string>()
    const [info, setInfo] = useState<Users | null | undefined>()
    const navigate = useNavigate()

    useEffect(() => {
        instance.get(`users/${login}`)
        .then((res) => setInfo(res.data))
        .catch((error) => console.log(error))
    }, [])

    console.log(login)
    console.log(info)
    
    
    return(
        <div>
            <DivIconBack>
                <div id="divIcone">
                    <FiCornerUpLeft size={30} onClick={() => navigate("/")} />
                </div>
            </DivIconBack>
            
            <CardDetails>
                <h3>{info?.name}</h3>
                <img src={info?.avatar_url} style={{width: "100px"}} />
                <span>{info?.login}</span>
                <p>{info?.bio}</p>
                <p>{info?.location}</p>
                <p>Número de repositórios: {info?.public_repos}</p>
                <p>Seguidores: {info?.followers}</p>
                <p>Seguindo: {info?.following}</p>
            </CardDetails>

        </div>
        
    )
}