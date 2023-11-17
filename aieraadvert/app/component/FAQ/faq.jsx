import { SectionWrapper } from '../hoc'
import CardFaq from './cardFaq';
import { styles } from '@/app/styles';

const FaqSection = () => {
    return (
     <>
     <h2 className={`${styles.sectionHeadText}`}>FAQ.</h2>
      <div className=' grid mt-10    sm:mr-24 lg:mr-0 grid-cols-1 gap-10 items-center justify-center'>
      
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