import './idcard'
function idcard({ student }) {
    return (
        <div classname="mounika">
            <p classname="small">name:{idcard.name}</p>
            <p classname="big">course:{idcard.course}</p>
            <p classname="mid">rollno:{idcard.rollno}</p>
            <p classname="low">bloodgroup:{idcard.bloodgroup}</p>
            <p classname="high">dob:{idcard.dob}</p>
        </div>
    )
}
export default idcard