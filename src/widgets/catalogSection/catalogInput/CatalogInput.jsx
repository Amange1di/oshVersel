import { useState } from "react";
import "./catalogInput.scss";
import { IoMdClose } from "react-icons/io";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

export const CatalogInput = () => {
    const books = [
        { id: 1, author: 'Чынгыз Айтматов', title: 'Эрте келген турналар', description: 'На русском языке', isPopular: true, word: 'турна' },
        { id: 2, author: 'Чынгыз Айтматов', title: 'Материнское поле', description: 'На кыргызском языке', isPopular: false, word: 'толгонай' },
        { id: 3, author: 'Чынгыз Айтматов', title: 'Прощай, Гульсары', description: 'На русском языке', isPopular: true, word: 'жылкы' }
    ];

    const [searchAuthor, setSearchAuthor] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [filter, setFilter] = useState("all");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleModal = () => setIsMenuOpen(!isMenuOpen);

    const filteredBooks = books.filter(book => {
        const matchesAuthor = searchAuthor ? book.author.toLowerCase().includes(searchAuthor.toLowerCase()) : true;
        const matchesTitle = searchTitle ? book.title.toLowerCase().includes(searchTitle.toLowerCase()) : true;
        const matchesKeyword = searchKeyword ? book.word.toLowerCase().includes(searchKeyword.toLowerCase()) : true;
        const matchesFilter = filter === "all" || (filter === "popular" && book.isPopular);

        return matchesAuthor && matchesTitle && matchesKeyword && matchesFilter;
    });


    return (
        <div>
            <div className="container">
                <div className="catalog">
                    <div className="catalog_kot">
                        <div className="catalog_buttons">
                            <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>Все</button>
                            <button className={filter === "popular" ? "active" : ""} onClick={() => setFilter("popular")}>Популярные</button>
                        </div>
                        <div className="catalog_menu">
                            <button title="кнопка поиска за $𝟙" className="catalog_burger-menu" onClick={toggleModal}><HiAdjustmentsHorizontal color="#004d4d" /></button>
                        </div>

                    </div>


                    <div className={`modal ${isMenuOpen ? "open" : ""}`} id="my-modal">
                        <div className="modal_box">
                            {isMenuOpen && <button className="modal_close-btn" onClick={toggleModal}><IoMdClose /></button>}


                            <div className="catalog_controls_input ">
                                <div className="input1">
                                    <div className="input1_text">
                                        <input className="input1_text2" type="text" placeholder="Поиск..." value={searchAuthor} onChange={(e) => setSearchAuthor(e.target.value)} /><IoIosSearch className="catalog_icon"/>
                                    </div>
                                </div>
                                {isMenuOpen && <button className="catalog_btn_search" onClick={toggleModal}>искать</button>}



                                <div className="input1">
                                    <div className="input1_text">
                                        <input className="input1_text2" type="text" placeholder="автору..." value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} /> <IoIosSearch  className="catalog_icon"/>
                                    </div>
                                </div>
                                {isMenuOpen && <button className="catalog_btn_search" onClick={toggleModal}>искать</button>}



                                <div className="input1">
                                    <div className="input1_text">
                                        <input className="input1_text2" type="text" placeholder="кл.слову..." value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} /><IoIosSearch className="catalog_icon" />
                                    </div>
                                </div>
                                {isMenuOpen && <button className="catalog_btn_search" onClick={toggleModal}>искать</button>}
                            </div>




                        </div>
                    </div>

                </div>

                <table className="catalog-table">
                    <thead>
                        <tr>
                            <th>АВТОР</th>
                            <th>НАЗВАНИЕ</th>
                            <th>ПРИМЕЧАНИЕ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.author}</td>
                                    <td>{book.title}</td>
                                    <td>{book.description}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" style={{ textAlign: "center" }}>Ничего не найдено</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};



