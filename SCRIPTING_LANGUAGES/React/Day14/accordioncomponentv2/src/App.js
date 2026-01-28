import React from 'react'

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [isCur, setIsCur] = React.useState(null);

  return <div className='accordion'>{}
    {data.map((el,index) => (<AccordionItem title={el.title} text={el.text} num={index} key={el.title} cur={isCur} setCur={setIsCur}/>))}
  </div>;
}

function AccordionItem({num, title, text, cur, setCur}) {
  // const [isOpen, setIsOpen] = React.useState(false);
  const isOpen = cur === num;

  function handleToggle() {
    setCur(cur === num ? null : num);
  }

  return (<div className={`item ${isOpen ? 'open' : ''}` }onClick={handleToggle}>
    <p className='number'>{num<9 ? `0${num+1}` : num+1}</p>
    <p className='title'>{title}</p>
    <p className='icon'>{isOpen ? '-' : '+'}</p>

    {isOpen && <div className='content-box'>{text}</div>}
  </div>);
}

// Children prop:-
//children prop is like we have component that we do self closing but if do like this <button>then any jsx here</button> like closing the component like html and the if use children keyword as prop in that component we use this jsx like function button({children}){
//       return <p>{children}</p> so all jsx written on component will be there.}