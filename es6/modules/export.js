const userCard = {
    name: 'user',
    age:60,
    address:"France"
};

export const address = userCard.address;

export function getUserName(){
    return userCard.name
}

export default userCard;