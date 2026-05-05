import { FaQuoteRight, FaStar } from "react-icons/fa6";
import { Container } from "@/components";
import { resumeData } from "@/data/resume";

export default function Quote() {
  return (
    <div className="h-auto w-full bg-dark-200 py-[50px]">
      <Container>
        <div className="mx-auto flex flex-col items-center justify-center text-center md:flex-row md:items-center md:justify-start md:px-0">
          <h1 data-aos="fade-right" className="text-[35px] font-bold md:mr-[50px]">
            Professional Summary
          </h1>
          <p data-aos="fade-left" className="text-[12px] text-white-200">
            What drives my engineering work.
          </p>
        </div>
        <div id="quote-cont" className="relative mt-[100px] h-auto w-full p-2 md:p-0">
          <QuoteCard />
        </div>
      </Container>
    </div>
  );
}

function QuoteCard() {
  return (
    <div className="relative h-auto w-full overflow-hidden rounded-lg bg-dark-300 px-[30px] py-[20px] md:px-[80px] md:py-[50px]">
      <FaQuoteRight
        data-aos="fade-left"
        className="absolute right-[25px] top-[20px] text-[35px] text-white-300 opacity-[.3]"
      />

      <div className="flex w-full flex-row items-center justify-start">
        <StarRatings count={5} />
        <small className="ml-2 font-bold text-white-300">{resumeData.fullName}</small>
      </div>
      <br />
      <div className="mt-4 flex w-full flex-row items-start justify-start">
        <p data-aos="zoom-in-up">{resumeData.favoriteQuote}</p>
      </div>
    </div>
  );
}

interface StarRatingsProps {
  count: number;
}

function StarRatings({ count }: StarRatingsProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <FaStar key={`rating-${index}`} className="mr-1 text-green-200" />
      ))}
      <small className="ml-2 text-white-200">{count}.0</small>
    </>
  );
}
