import { Button, Container, Input,  Stack,Spinner } from "@chakra-ui/react"
import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleIsLoggedIn } = useContext(AuthContext);
  const [isLoading,setIsLoading]=useState(false)
  const navigate = useNavigate();

  const loginUserRequest = (payload) => {
    axios
      .post('https://reqres.in/api/login', payload)
      .then((res) => {
        let {
          data: { token },
        } = res;
        handleIsLoggedIn();
        navigate('/dashboard', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        navigate('/error')
      });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    let payload = {
      email,
      password,
    };

    loginUserRequest(payload);
  };
    return(
        <>
        <Container maxW="md">
        <Stack>
          <Input
         type='email'
         value={email}
         onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            
          />
          <Input
           type='password'
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           placeholder="Enter password" />
          <Button onClick={onFormSubmit} bgColor="blueviolet" value="Submit" >
            Submit
            {isLoading && <Spinner color="red.500" />}
          </Button>
        </Stack>
      </Container>
        </>
    )
}
export default Login