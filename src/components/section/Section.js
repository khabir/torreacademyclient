import React from 'react';
import Chip from '@mui/material/Chip';
import styles from './section.module.scss';
import SkillDetails from '../skill-details/SkillDetails';
import { getSkillDetails } from '../../store/skillDetails/thunk';
import { useAppDispatch } from '../../store/hooks';

const Section = ({ skill, userId }) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  let icon = null;

  switch (skill.proficiency) {
    case 'Master / Influencer':
      icon = (
        <img
          style={{ width: '25px' }}
          src="https://cdn-icons-png.flaticon.com/512/3557/3557416.png"
        />
      );
      break;

    case 'Novice':
      icon = (
        <img
          style={{ width: '25px' }}
          src="https://icon-library.com/images/n-icon/n-icon-25.jpg"
        />
      );
      break;

    case 'Expert':
      icon = (
        <img
          style={{ width: '25px' }}
          src="https://www.clipartmax.com/png/full/424-4242161_expert-icon-transparent-expert-icon.png"
        />
      );
      break;
    case 'Proficient':
      icon = (
        <img
          style={{ width: '25px' }}
          src="https://mpng.subpng.com/20190125/zgo/kisspng-vector-graphics-computer-icons-royalty-free-illust-expertise-ssi-rm-5c4b90e54c3371.1919953615484561653121.jpg"
        />
      );
      break;

    default:
      icon = (
        <img
          style={{ width: '25px' }}
          src="https://library.kissclipart.com/20180914/fe/kissclipart-learning-icon-clipart-education-computer-icons-lea-34cfe1718546a09f.png"
        />
      );
      break;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.name}>{skill.proficiency}</div>
      </div>
      <div className={styles.skillChips}>
        {skill.skills &&
          skill.skills.map((skill, index) => (
            <div className={styles.chips} key={index}>
              <Chip
                onClick={() => {
                  handleClickOpen();
                  dispatch(getSkillDetails({ userId, skillId: skill.id }));
                }}
                label={skill.name}
                clickable
              />
            </div>
          ))}
      </div>
      {open && <SkillDetails open={open} handleClose={handleClose} />}
    </div>
  );
};

export default Section;
