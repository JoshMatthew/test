import {useState} from 'react';
import {FiChevronUp, FiChevronDown} from 'react-icons/fi';

export function Accordion({children}) {
  return <div className="grid gap-4">{children}</div>;
}

export function AccordionItem({title, content, number}) {
  const [isOpen, setIsOpen] = useState(false);

  const switchAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      switchAccordion();
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onClick={switchAccordion}
      onKeyDown={handleKeyDown}
      className={`accordion-item ${isOpen ? 'pb-0' : 'pb-4 lg:pb-7'}`}
    >
      <span className="flex gap-2 relative">
        <h1 className="absolute left-0 font-jakarta font-medium opacity-[34%] text-lg">
          {zeroPrefixer(number)}
        </h1>
        <h1 className="font-bold text-xl font-inria-serif text-[#ffffff95] px-9 lg:text-2xl lg:px-14">
          {title}
        </h1>
        <span className="ml-auto text-xl mb-auto">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </span>
      {isOpen && (
        <p
          className={`py-5 px-9 text-[#ffffff95] lg:text-base lg:py-6 lg:px-14 font-inter`}
        >
          {content}
        </p>
      )}
    </div>
  );
}

function zeroPrefixer(number) {
  return (number < 10 ? '0' : '') + number;
}
