import React , { useState } from 'react';
import faqicon from '../../assets/icons/faqicon.png'

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
          question: 'What is Pepe Meloni?',
          answer:
            'Pepe Meloni is a decentralized meme-based cryptocurrency project built on the Solana blockchain.',
        },
        {
          question: 'How can I buy Pepe Meloni?',
          answer:
            'You can buy Pepe Meloni tokens on decentralized exchanges like Raydium or Orca that support the Solana ecosystem.',
        },
        {
          question: 'Is Pepe Meloni safe to invest in?',
          answer:
            "As with any cryptocurrency investment, there are risks involved. It's important to do your own research and invest responsibly.",
        },
        {
          question: 'Does Pepe Meloni have community?',
          answer:
            'Yes, Pepe Meloni has a thriving community of supporters and enthusiasts who participate in governance and contribute to the project.',
        },
      ];

    return (
        <div className='bg-[#0178BA] pb-10 ' id='faq'>
            <div className="max-w-3xl mx-auto">
        <h2 className="text-white text-5xl font-bold mb-8 pt-16 text-center " style={{fontFamily:'Kavoon'}}> FAQ</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg mb-4 overflow-hidden lg:mx-0 mx-4"
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 focus:outline-none"
              onClick={() => handleClick(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-2xl font-bold">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 border-t">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
        </div>
    );
};

export default Faq;