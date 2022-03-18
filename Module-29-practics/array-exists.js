function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return "Please provide an array"
    }
    let mega = friends[0];
    for (const friend of friends){
        if(friend.lenght > mega.lenght){
            mega = friend;
        }
        return mega;
    }
}
const friends = ["khutub", "lion", "Shamiol", "Sabbir"];
const myBigBuddy = megaFriend(1245);
//console.log(myBigBuddy);


