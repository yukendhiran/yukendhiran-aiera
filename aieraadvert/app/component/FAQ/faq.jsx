import { SectionWrapper } from '../hoc'
import CardFaq from './cardFaq';
import { styles } from '@/app/styles';

const FaqSection = () => {
    return (
     <>
     <h2 className={`${styles.sectionHeadText}`}>FAQ.</h2>
      <div className='mr-14 flex flex-col space-y-5 mt-10'>
      
      <CardFaq
        question="What is AIERA?"
        answer="AIERA is a Digital marketing company that helps to convet your business into online"
      />
       <CardFaq
        question="Question?"
        answer="Answer"
      />
       <CardFaq
        question="Question?"
        answer="Answer"
      />
      </div>
     
     </>
    );
  };
  
  export default SectionWrapper(FaqSection, "faq");