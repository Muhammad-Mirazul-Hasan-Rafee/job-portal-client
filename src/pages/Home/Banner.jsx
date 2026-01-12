import { easeOut, motion } from "motion/react";

import happyTeam from '../../assets/Team/happy-team.jpg';
import workingTeam from '../../assets/Team/working-team.jpg';


const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="flex-1">
         <motion.img
          src={happyTeam}
          animate={{y: [50 , 120 , 50]}} transition={{duration:10, repeat:Infinity}}
          className="w-60 h-48 rounded-t-[38px] rounded-br-[38px] border-l-3 border-b-3 border-blue-300 shadow-2xl"
        />
         <motion.img
          src={workingTeam}
          animate={{x: [100 , 160 , 100]}} transition={{duration:10, repeat:Infinity}}
          className="w-60 h-48 rounded-t-[38px] rounded-bl-[38px] border-r-3 border-b-3 border-blue-300 shadow-2xl"
        />
       </div>
        <div className="flex-1">
          <motion.h1 animate={{x:150}}
          transition={{duration:1.7 , delay:1 , ease: easeOut, repeat:Infinity}}
           className="text-5xl font-bold"> Your latest <motion.span  animate={{color:['#D9994C' , '#47C94D' , '06083B' , '#5D66F0']}} transition={{duration:1.6, repeat:Infinity}}>jobs!</motion.span></motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
