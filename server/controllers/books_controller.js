let books = [];
// id,title,author
let id = 0;

module.exports = {
    create: (req,res) => {
      let {title,author} = req.body[0]
      let newBook = {
        title: title,
        author: author,
        id: id
      }
      books.push(newBook)
      id++;
      res.status(200).json(books)
    },
    read: (req,res) => {
      res.status(200).json(books)
    },
    update: (req,res) => {
      let {title,author} = req.body
      let idToCheck = req.params.id
      let indexToChange = books.findIndex(book => book.id == idToCheck)
      books[indexToChange] = {
        id: idToCheck,
        title: title || books[indexToChange].title,
        author: author || books[indexToChange].author
      }
      res.status(200).json(books)
    },
    delete: (req,res) => {
      var idToDelete = req.params.id
      let indexToDelete = books.findIndex(book => book.id == idToDelete)
      books.splice(indexToDelete,1)
      res.status(200).json(books)
    }

}
