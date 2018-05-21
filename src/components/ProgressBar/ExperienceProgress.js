import { injectStyle } from '../InjectStyle'

export const ExperienceProgress = (props) => {
  return (
    <div className='experience-progress'>
      <PrevExperience from='0' to='25' />
      <div className='experience'>{props.currentExpLvl} / {props.nextExpLvl}</div>
      <NewExperience from='0' to='5' numberAdd='1500' />
    </div>
  )
}

const PrevExperience = ({from, to}) => {
  const ExperienceProgressStyle = `
      @-webkit-keyframes experience-progress-animation {
        from{width: ${from}%;}
         to{width: ${to}%;}
      }
    `
  injectStyle(ExperienceProgressStyle)

  return (<div className='experience-progress__current' />)
}

const NewExperience = ({ from, to, numberAdd }) => {
  const AddExpStyle = `
    @-webkit-keyframes add-exp-animation {
        from{ width: ${from}%;
          display: none;
         }
        50%{
          width: ${from};
          display: none;
        }
         to{width: ${to}%;
          display: flex;          
         }
      }
  `

  const AddCountStyle = `
    @-webkit-keyframes add-count-animation {
        0%{
          opacity: 0;
          visibility: hide;
        }
        33%{
          opacity: 0;
          visibility: hide;
        }
        34%{
          opacity: 1;
          visibility: visible;
        }
        100%{ 
           opacity: 1;
           visibility: visible;        
         }
      }
  `

  injectStyle(AddExpStyle)
  injectStyle(AddCountStyle)

  return (
    <div className='add-experience'>
      <div className='add-experience__progress' />
      <div className='add-experience__count-add'> + {numberAdd}</div>
    </div>
  )
}
