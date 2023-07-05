import React, {useState} from "react";
import { searchProfiles } from "../../api/api";

const SearchInput = () => {
    const [value, setValue] = useState('')
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    console.log(response)
    const searchChandler = (e:any) => {
        console.log(e)
        setValue(e.target.value)
        setLoading(true)
        searchProfiles(e.target.value).then((resp) => setResponse(resp)).finally(() => setLoading(false))
    }
    return(
        <div className="search-profile-div">
            <input
                value={value}
                onChange={searchChandler}
                placeholder="Lens link /  Lens @username / 0xWallet" type="text" />
            <button></button>
            <div className="search-modal">
                {loading? 
                <p>loading...</p> :
                <>
                    {response.map((post:any) => 
                        <div>
                            <div>
                                <img width={30} src={post?.picture?.original?.url || require('../../assets/images/logo-green.png') } alt="" />
                                <p>{post.handle}</p>
                            </div>
                            <p>{post.name}</p>
                        </div>
                    )}
                </>
                }
            </div>
        </div>
    )
}

export default SearchInput;