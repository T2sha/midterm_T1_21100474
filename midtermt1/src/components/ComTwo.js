import axios from "axios";

axios.get('https://api.spacexdata.com/v4/crew ')
.then((res) => {
    console.log(res)

    let data = res.data[0];

    console.log(data.details)
})
.catch((err) => {
    console.log(err)
})

const ComTwo = ()=>{
    return(
        <>
        <p>This is component Two</p>
        </>
    )
}
export default ComTwo