const user = {
    user_name : 'Arbaj',
    password : '12l345'
}
const MY_DB = [
    {
        user_name : 'Arbaj',
        password : '12345'
    },
    {
        user_name : 'Owais',
        password : '606'
    },
    {
        user_name : 'Sufiyan',
        password : '786'
    },
]

const getUserFromDB = user => MY_DB.find(u => u.user_name == user.user_name);

const isCorrectPassword = (user,foundUser)  => user.password === foundUser.password

const getMsg = (user,success = true) => {
    const msgArr = ['Access Granted!','Password is Wrong, Please Try Again']
    console.log('Hey ' + user.user_name + ',');
    console.log(success ? msgArr[0] : msgArr[1]) 
}

const isAuth = (user) => {

    const foundUser =  getUserFromDB(user)

    !foundUser ? console.log('User Not Found') : (
        isCorrectPassword(user,foundUser) ? getMsg(user) : getMsg(user,false)
    )

}

isAuth(user)