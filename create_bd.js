async function createTables() {
    try {
        await db.none(`
            CREATE TABLE Users (
                user_id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                surname VARCHAR(255) NOT NULL,
                lastname VARCHAR(255) NOT NULL,
                date_of_birth DATE NOT NULL,
                phone VARCHAR(20) NOT NULL,
                email VARCHAR(255) NOT NULL,
                num_of_lost_book INT DEFAULT 0 NOT NULL
            );

            CREATE TABLE Authors (
                author_id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                country VARCHAR(255) NOT NULL,
                date_of_birth DATE NOT NULL,
                date_of_death DATE
            );

            CREATE TABLE Books (
                book_id SERIAL PRIMARY KEY,
                Name_book VARCHAR(255) NOT NULL,
                Author_id INT REFERENCES Authors(author_id) ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
                Genre VARCHAR(255) NOT NULL,
                Year_of_writing VARCHAR(20) NOT NULL,
                About_what TEXT NOT NULL,
                Num_in_bible INT NOT NULL
            );

            CREATE TABLE Librarians (
                librarian_id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                surname VARCHAR(255) NOT NULL,
                lastname VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                is_admin VARCHAR(20) DEFAULT 'user' NOT NULL
            );

            CREATE TABLE Book_distribution (
                id SERIAL PRIMARY KEY,
                user_id INT REFERENCES Users(user_id) ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
                book_id INT REFERENCES Books(book_id) ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
                librarian_id INT REFERENCES Librarians(librarian_id) ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
                date_of_issue DATE default current_date,
                return_date DATE NOT NULL,
                is_returned BOOLEAN DEFAULT FALSE NOT NULL
            );
        `);
        console.log('Tables created successfully.');
    } catch (error) {
        console.error('Error creating tables:', error);
    }
}

//createTables(); // Когда надо будет базу заного создать просто снеси в начале // и напиши node server.js и у тебя есть база :)
