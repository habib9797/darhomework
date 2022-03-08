
interface Props {
   name: string
   lastname: string
   dateofbirth: string
   email: string
   gender: string
}
function User({ name, lastname, dateofbirth, email, gender }: Props) {
   return (<h1> hello {name} {lastname} your birthday {dateofbirth} your email {email} your gender {gender}</h1>)
}

export default User