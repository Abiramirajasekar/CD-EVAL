import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Example from "./Example"
import {Flex, Grid} from "@chakra-ui/react"
import Pagination from "./Pagination"
import {useSearchParams} from "react-router-dom"
function getPage(value) {
    value = Number(value);
    if (value <= 0) {
      value = 1;
    }
    if (!value) {
      value = 1;
    }
    return value;
  }

function Dashboard(){
    
  
    const [searchParams, setSearchParams] = useSearchParams();
    const initialPage = getPage(searchParams.get("page"));
            const[data,setData]=useState([])
            const[page,setPage]=useState(1)
            const[totalPages,setTotal]=useState(8)
            const handleAdd=()=>{
                setPage(page+1)
            }
            const handleRed=()=>{
                setPage(page-1)
            }

  
useEffect(()=>{
    getProducts(page)
},[page])

    const getProducts=(page)=>{
        let res= axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=${10}`).then(res=>setData(res.data.data))
        .catch((err)=>console.log(err))

    }
    
    console.log(data)
    
    return (
        <div>
            <Flex>
           {data.map(el=>   <Example data={el} />)}
           </Flex>
           <Pagination page={page} handleAdd={handleAdd} handleRed={handleRed} />

        </div>
       
    )
}
export default Dashboard