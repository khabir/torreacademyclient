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

  const user = useAppSelector(selectUserSkills);

  React.useEffect(() => {
    dispatch(getSkillList('407fcd19-a1be-4dd4-b28c-cd6a7da11748'));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img
          src="https://res.cloudinary.com/torre-technologies-co/image/upload/v1639488123/origin/starrgate/users/profile_11a5c5529ba466f078040470dec3ef951840c09a.jpg"
          alt="kbr"
          className={styles.profilePicture}
        />
        <div className={styles.nameSection}>
          <div className={styles.profileName}>Alexender Torrenegra</div>
          <br />
          <p>Full Stack Developer | {user.email} | {user.phone}</p>
        </div>
      </div>
      <div className={styles.subBody}>
        <div className={styles.sectionHeader}>Skills and interests</div>
        {user.length === 0 ? (
          <CircularProgress />
        ) : (
          user.proficiencyWiseSkills.map((skill, index) => {
            return <Section key={index} skill={skill} />;
          })
        )}
      </div>
    </div>
  );
};

export default UserHomePage;
