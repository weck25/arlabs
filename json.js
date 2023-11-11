// const data = [
//     {
//         id: 1,
//         title: "berita 1",
//         subtitle: "berita 1 subtitle",
//         content: "ini berita pertama",
//         date: Date('2023-10-11')
//     },
//     {
//         id: 2,
//         title: "berita 2",
//         subtitle: "berita 2 subtitle",
//         content: "ini berita kedua",
//         date: Date('2023-10-12')
//     },
//     {
//         id: 3,
//         title: "berita 3",
//         subtitle: "berita 3 subtitle",
//         content: "ini berita ketiga",
//         date: Date('2023-10-13')
//     },
//     {
//         id: 4,
//         title: "berita 4",
//         subtitle: "berita 4 subtitle",
//         content: "ini berita keempat",
//         date: Date('2023-10-14')
//     },
//     {
//         id: 5,
//         title: "berita 5",
//         subtitle: "berita 5 subtitle",
//         content: "ini berita keenam",
//         date: Date('2023-10-15')
//     },
//     {
//         id: 6,
//         title: "berita 6",
//         subtitle: "berita 6 subtitle",
//         content: "ini berita ketujuh",
//         date: Date('2023-10-16')
//     }
// ];
//
//console.log(data)
// for (let i = 0; i < data.length; i++) {
//     const element = data[i];
//     console.log(`ID : ${element.id} Title : ${element.title}`);
    
// }

const data = {
    result1:[
        {
            id1: 1,
            title1: "berita 1 1",
            subtitle1: "berita 1 subtitle",
            content1: "ini berita pertama",
            date1: Date('2023-10-10'),
            result2: [
                {
                    id2: 1,
                    title2: "berita 1 2",
                    subtitle2: "berita 1 subtitle",
                    content2: "ini berita pertama",
                    date2: Date('2023-10-10'),
                    
               
                },
                {
                    id2: 2,
                    title2: "berita 2 2",
                    subtitle2: "berita 2 subtitle",
                    content2: "ini berita pertama",
                    date2: Date('2023-10-11'),
                },
        ]
       
        },
        {
            id1: 2,
            title1: "berita 2 1",
            subtitle1: "berita 2 subtitle",
            content1: "ini berita pertama",
            date1: Date('2023-10-11'),
            result2: [
                {
                    id2: 1,
                    title2: "berita 1 2",
                    subtitle2: "berita 1 subtitle",
                    content2: "ini berita pertama",
                    date2: Date('2023-10-10'),
                    
               
                },
                {
                    id2: 2,
                    title2: "berita 2 2",
                    subtitle2: "berita 2 subtitle",
                    content2: "ini berita pertama",
                    date2: Date('2023-10-11'),
                },
        ]
        },
]
}
// for (let i = 0; i < ob.data.length; i++) {
//     const element = ob.data[i];
//     console.log(element.title)
// }
// data.result1.map((item) =>{
//     const article = `<h3>${item.subtitle1}</h3>`;
//     console.log(article)
//     document.getElementById('contrainer').innerHTML = article;
//  })
const articleContrainer = document.getElementById('contrainer');
data.result1.map((item)=>{
    const article = `<h2> ${item.title1}</h>`
    articleContrainer.innerHTML += article;
})
