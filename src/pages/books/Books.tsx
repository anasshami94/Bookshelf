import useBooks, { IBook } from "./useBooks";
import Carousel from "../../components/books-carousel/BooksCarousel";
import { CATEGORY_PROPS } from "./constants";
import "./styles.scss";

const Books = () => {
  const {
    categories,
    categoryMap,
    selectedBookMap,
    extendsBook,
    cleanSelectedBook,
  } = useBooks();
  if (Object.keys(categoryMap).length === 0) return "Loading ...";
  return (
    <section className="books-container">
      <section className="section white">
        <h1 className="heading">
          <strong>Browse</strong> Our Most Popular Categories
        </h1>
        <section className="categories">
          {categories.map(({ id, title, description, image }) => (
            <div className="card" key={id}>
              <img src={image} alt="headphone" />
              <article className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </div>
          ))}
        </section>
      </section>
      {Object.entries(categoryMap).map(
        ([category, books]: [string, IBook[]]) => {
          const { title, bg = "" } =
            CATEGORY_PROPS[category as keyof typeof CATEGORY_PROPS] || {};
          return (
            <section className={`section ${bg}`} key={category}>
              <h1 className="heading">
                <strong>{title}</strong>
              </h1>
              <Carousel
                slides={books}
                onClick={(id: string) => {
                  extendsBook({ id, category });
                }}
              />
              {!!selectedBookMap[category] && (
                <section className="book-section">
                  <h2>{selectedBookMap[category].title}</h2>
                  <p>{selectedBookMap[category].description}</p>
                  <p>By {selectedBookMap[category].author}</p>
                  <p>Reviewed By {selectedBookMap[category].reviewedBy}</p>
                  <button onClick={() => cleanSelectedBook(category)}>
                    <strong>X Close</strong>
                  </button>
                </section>
              )}
            </section>
          );
        }
      )}
    </section>
  );
};

export default Books;
