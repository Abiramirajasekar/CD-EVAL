import { Button } from "@chakra-ui/react";

function Pagination({page,handleAdd,handleRed}){
    return (
        <>
        <Button disabled={page===1} onClick={handleRed} >Prev</Button>
        <Button>{page}</Button>
        <Button onClick={handleAdd}>Next</Button>
        </>
    )
}
  export default Pagination;