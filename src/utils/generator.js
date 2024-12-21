import books from "./books.json";
import { generateClient } from 'aws-amplify/api';
import { createBook } from "../graphql/mutations";

async function GenerateBooks() {
    const client = generateClient({ authMode: 'userPool' });

    var success = [];
    var errors = [];

    for (const book of books) {
        try {
            const res = await client.graphql({
                query: createBook,
                variables: {
                    input: {
                        id: book.id,
                        title: book.title,
                        authorId: book.authors[0],
                        publisherId: book.publisher_id,
                        genres: book.genres,
                        publicationYear: book.publication_year,
                        image: book.img,
                        description: book.description
                    }
                }
            });
            success.push(res.data.createBook.id);
        }
        catch(err) {
            console.log(err);
            errors.push(book);
        }
    };

    return {total: success.length+errors.length, success: success.length, errors: errors.length};
};

export { GenerateBooks };