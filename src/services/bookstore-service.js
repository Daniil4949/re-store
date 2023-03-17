export default class bookstoreService {
    data = [{
        id: 1,
        title: "Production-Ready Microservices",
        author: "Susan J. Fowler",
        price: 32,
        coverImage: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"
    }
    ]

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(this.data)
            }, 700);
        });
    }
}