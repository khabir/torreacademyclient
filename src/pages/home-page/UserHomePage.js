import React from 'react';
import Section from '../../components/section/Section';
import { useAppSelector } from '../../store/hooks';
import { selectUserSkills } from '../../store/user/selectors';
import { useAppDispatch } from '../../store/hooks';
import { getSkillList } from '../../store/user/thunk';
import styles from './userHomePage.module.scss';
import CircularProgress from '@mui/material/CircularProgress';

const UserHomePage = () => {
  const dispatch = useAppDispatch();

  const skills = useAppSelector(selectUserSkills);

  React.useEffect(() => {
    dispatch(getSkillList());
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <img
          src="https://res.cloudinary.com/torre-technologies-co/image/upload/v1639488123/origin/starrgate/users/profile_11a5c5529ba466f078040470dec3ef951840c09a.jpg"
          alt="kbr"
          className={styles.profilePicture}
        />
      </div>
      <div className={styles.profileName}>Alexender Torrenegra</div>
      <div className={styles.sectionHeader}>Skills and interests</div>
      {skills.length === 0 ? (
        <CircularProgress />
      ) : (
        skills.map((skill, index) => {
          return <Section key={index} skill={skill} />;
        })
      )}
    </div>
  );
};

export default UserHomePage;
