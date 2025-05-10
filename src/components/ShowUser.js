
const ShowUser = ({student}) => {
    return(
        <>
        <div>{student.id} name: {student.name}  location: {student.location}</div>
        </>
    )

}

export default ShowUser;