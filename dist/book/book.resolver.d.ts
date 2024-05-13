import { BookService } from './book.service';
import { Book as BookModel } from '../graphql';
import { AddBookArgs } from '../book/args/add.book.args';
export declare class BookResolver {
    private readonly bookService;
    constructor(bookService: BookService);
    getAllBooks(): BookModel[];
    getBookById(id: number): BookModel;
    deleteBookById(id: number): string;
    addBook(addBookArgs: AddBookArgs): string;
    updateBook(id: number, updateBookArgs: AddBookArgs): string;
}
