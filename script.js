/*

 */
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus est sed ante rhoncus iaculis. " +
    "Pellentesque nec risus lectus. Sed euismod diam et justo molestie, ut tincidunt lorem tincidunt. " +
    "Cras iaculis nisi placerat, varius justo at, consectetur lectus. Etiam porttitor sapien nibh, " +
    "non cursus massa finibus et. Fusce rhoncus accumsan purus, sit amet maximus nisl varius vitae. Maecenas " +
    "tincidunt placerat nibh eu convallis. Aenean vitae felis vitae metus iaculis pulvinar nec eu orci. Aliquam a " +
    "aliquam leo. Quisque feugiat ligula vel efficitur porttitor. Curabitur congue ex quis urna gravida aliquet. " +
    "Mauris arcu enim, pulvinar vitae nulla at, dignissim pharetra libero. ";// ვქმნით ცვლას სახელად lorem და ვანიჭებთ მას ტექსტურ (სტრინგულ) მნიშვნელობას

var id = "container";//ვქმნით ცვლადს სადელად id და ვანიჭებთ მას სტრინგულ მნიშვნელობას "container"

var el = document.getElementById(id);//ვქმნით ცვლადს სადელად el და ვანიჭებთ მას მნიშვნელობას დოკუმენტის ხიდან (document tree) არსებული ელემენტის იდენტიფიკატორით ცვლად id-ს მნიშვნელობით (container)

for (var i = 0; i < 10; i++) {// ვიწყებთ ციკლს სადაც ცვლად i-ს ვანიჭებთ მნიშვნელობას 0 და ვიდრე იგი ათზე ნალკებია ყოველ იტერაციაში ვზრდით ერთით
    var row = document.createElement("div");//ვქმნით ცვლადს სადელად row და ვანიჭებთ მას ახლადშექმნილი div ელემენტის მნიშვნელობას
    row.classList.add("row");//row ცვლადში ახლადშექმნილ div ელემენტის კლასების სიას ვამატებთ კლასს სახელად row
    for (var j = 0; j < 3; j++) {//ვიწყებთ ციკლს სადაც ცვლად j-ს ვანიჭებთ მნიშვნელობას 0 და ვიდრე იგი სამზე ნალკებია ყოველ იტერაციაში ვზრდით ერთით
        var col = document.createElement("div");//ვქმნით ცვლადს სადელად col და ვანიჭებთ მას ახლადშექმნილი div ელემენტის მნიშვნელობას
        col.classList.add("col");//col ცვლადში ახლადშექმნილ div ელემენტის კლასების სიას ვამატებთ კლასს სახელად col
        col.innerHTML = lorem;// col ცვლადში ახლადშექმნილ div ელემენტს განვუსაზღვრავთ შიგთავსს, ვანიჭებთ ცვლად lorem-ის მნიშვნელობას
        col.style.backgroundColor = "#5" + i + j * 4;//col ცვლადში ახლადშექმნილ div ელემენტს განვუსაზღვრავთ სტილს, კერძოდ ფონის ფერს, ცვლადების i-ს და j-ს მნიშვნელობების მიხედვით
        row.appendChild(col);//მშობლიურ ცილკში (i) ცვლად row-ში არსებულ ელემენტ div-ის შიგთავსს ვუმატებთ col ცვლადში არსებულ ელემენტ div-ს თავისი ატრიბუტებით
    }
    el.appendChild(row);//ცვლად el-ში არსებულ ელემენტს იდენტიფიკატორით container ვუმატებთ row ცვლაში არსებულ ელემენტ div-ს თავისი შიგთავსით
}

