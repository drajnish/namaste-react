import { useState } from 'react';

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <>
          <button
            onClick={() => setIsVisible()}
            className="cursor-pointer underline"
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          onClick={() => setIsVisible()}
          className="cursor-pointer underline"
        >
          View
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState('about');
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={'About Instamart'}
        description={
          'On the other hand, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis totam minus aspernatur quae excepturi ut hic? Eligendi mollitia corporis officia perferendis, et voluptatum fuga, debitis molestiae placeat exercitationem quisquam asperiores. consectetur, adipisicing elit. Quidem quisquam quos, iure repudiandae quam ipsum, odit eum quo nam nihil, illo saepe minima fuga odio iusto soluta qui sint nostrum'
        }
        isVisible={visibleSection === 'about'}
        setIsVisible={() =>
          setVisibleSection(visibleSection === 'about' ? '' : 'about')
        }
      />
      <Section
        title={'Our Team'}
        description={
          'On the other hand, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quisquam quos, iure repudiandae quam ipsum, odit eum quo nam nihil, illo saepe minima fuga odio iusto soluta qui sint nostrum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis totam minus aspernatur quae excepturi ut hic? Eligendi mollitia corporis officia perferendis, et voluptatum fuga, debitis molestiae placeat exercitationem quisquam asperiores.'
        }
        isVisible={visibleSection === 'team'}
        setIsVisible={() =>
          setVisibleSection(visibleSection === 'team' ? '' : 'team')
        }
      />
      <Section
        title={'Careers'}
        description={
          'On the other hand, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quisquam quos, iure repudiandae quam ipsum, odit eum quo nam nihil, illo saepe minima fuga odio iusto soluta qui sint nostrum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis totam minus aspernatur quae excepturi ut hic? Eligendi mollitia corporis officia perferendis, et voluptatum fuga, debitis molestiae placeat exercitationem quisquam asperiores.'
        }
        isVisible={visibleSection === 'career'}
        setIsVisible={() =>
          setVisibleSection(visibleSection === 'career' ? '' : 'career')
        }
      />
    </div>
  );
};

export default Instamart;
