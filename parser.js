//Входяшие данные

// const users = {
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//         geo: {
//             lat: "-37.3159",
//             lng: "81.1496"
//         }
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//         name: "Romaguera-Crona",
//         catchPhrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets"
//     }
// } ;

function parserUsers(param){
    console.log(param);
};

function parserUser(data){
    /* Множественная деструктуризация*/
    const {
        name,
        username,
        email,
        address:{street,suite,city,zipcode,
        geo:{lat,lng}},
        phone,
        website,
        company:{name: compName,catchPhrase,bs}
    } = data ;
    const userNames    = `Лежит пользователь ${name}`,
          userNick    = `Ник данного пользователя ${username}`,
          userEmail   = `У ${name} электронная почта: ${email}`,
          userPhone   = `С ${username} можно созвонится по телефону ${phone}`,
          userWebsite = `Для полной информации посетите сайт пользователя ${website}`,
          userAddress = `${name} живёт на улице ${street} в городе ${city} в доме ${suite}`,
          userZipcode = `Почтовый индекс ${zipcode}`,
          userGeo     = `Так же вы можете найти данного пользователя на карте по координатам (долгота: ${lat}, широта: ${lng})`,
          userComp    = `Работает в компании ${compName}`,
          userJob     = `В области ${catchPhrase}`,
          userBs      = `Занимается на этой работе ${bs}`,
          userInfo    = `${userNames}\n${userNick}\n${userEmail}\n${userPhone}\n${userWebsite}\n${userAddress}\n${userZipcode}\n${userGeo}\n${userComp}\n${userJob}\n${userBs}`
          ;
          return userInfo

}

const userInfo = parserUser(param);

//console.log(userInfo);

