import React from 'react';
import Chip from '@mui/material/Chip';
import styles from './section.module.scss';
import SkillDetails from '../skill-details/SkillDetails';
import { getSkillDetails } from '../../store/skillDetails/thunk';
import { useAppDispatch } from '../../store/hooks';

const Section = ({ skill }) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <div className={styles.icon}>icon</div>
        <div className={styles.name}>{skill.proficiency}</div>
      </div>
      <div className={styles.skillChips}>
        {skill.skillNames &&
          skill.skillNames.map((skills, index) => (
            <div className={styles.chips} key={index}>
              <Chip
                onClick={() => {
                  handleClickOpen();
                  dispatch(getSkillDetails());
                }}
                label={skills}
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
