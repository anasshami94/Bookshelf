import Carousel from "better-react-carousel";
import { IBook } from "../../pages/books/useBooks";
import "./carousel.scss";

interface ICarouselProps {
  slides: IBook[];
  onClick: (id: string) => void;
}
const BREAK_POINTS = [
    {
        breakpoint: 500,
        cols: 1,
    },
    {
        breakpoint: 800,
        cols: 2,
        gap: 15,
    },
    {
        breakpoint: 1024,
        cols: 3,
        rows: 1,
        gap: 15,

    },
    {
        breakpoint: 1400,
        cols: 4,
        rows: 1,
        gap: 15,
    },
]
const BooksCarousel = ({ slides = [], onClick }: ICarouselProps) => {
  return (
    <Carousel
        cols={6}
        rows={1}
        gap={15}
        responsiveLayout={BREAK_POINTS}
        containerClassName="carousel"
        loop
        mobileBreakpoint={0}
        >
      {slides.map(({ id, image, title, reviewedBy, author }) => (
        <Carousel.Item  key={id}>
          <section className="card"  onClick={() => onClick(id)}>
            <img loading="lazy" src={image} alt="carousel image" />
            <article>
                <label>{title}</label>
                <h6>
                    <small>By {author}</small>
                    <small>Reviewed By {reviewedBy}</small>
                </h6>
            </article>
          </section>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BooksCarousel;
