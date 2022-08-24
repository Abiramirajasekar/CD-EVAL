import { Link } from "react-router-dom"
import {Button} from "@chakra-ui/react"
function Home(){
    return (
        <div>
            <Link to="/login" ><Button>Login</Button></Link>

        </div>
    )
}
export default Home