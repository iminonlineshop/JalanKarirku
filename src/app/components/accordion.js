'use client';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function AccordionItem({ title, content, isOpen, toggleAccordion }) {
  return (
    <div className="p-[24px] shrink-0 inline-flex flex-col items-center border-y-[2px] border-gray2">
      <button
        className="self-stretch flex items-center"
        onClick={toggleAccordion}
      >
        <span className="self-start text-left text-[18px] font-[700] leading-[19.8px] text-primer1 block mr-auto">
          {title}
        </span>
        {isOpen === true ? (
          <Icon icon="bxs:up-arrow" className="text-primer1 self-end block" />
        ) : (
          <Icon icon="bxs:down-arrow" className="text-primer1 self-end block" />
        )}
      </button>
      {isOpen && (
        <div className="text-primer1 leading-[22.4px] text-[16px] mt-2 self-start text-justify">
          {content}
        </div>
      )}
    </div>
  );
}

export default function Accordion({ items }) {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === openItemIndex) {
      // Clicking on an already open item closes it.
      setOpenItemIndex(null);
    } else {
      // Clicking on a closed item opens it.
      setOpenItemIndex(index);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={index === openItemIndex}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </>
  );
}

Accordion.propTypes = {
  items: PropTypes.array,
};
