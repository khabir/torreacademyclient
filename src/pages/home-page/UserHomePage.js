import React from 'react';
import Section from '../../components/section/Section';
import { useAppSelector } from '../../store/hooks';
import { selectUserSkills } from '../../store/user/selectors';
import { useAppDispatch } from '../../store/hooks';
import { getSkillsByUser } from '../../store/user/thunk';
import styles from './userHomePage.module.scss';
import CircularProgress from '@mui/material/CircularProgress';

const UserHomePage = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUserSkills);

  React.useEffect(() => {
    if (!user.userId) {
      dispatch(getSkillsByUser('407fcd19-a1be-4dd4-b28c-cd6a7da11748'));
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img
          src={user.profilePicture}
          alt="kbr"
          className={styles.profilePicture}
        />
        <div className={styles.nameSection}>
          <div className={styles.profileName}>
            {user.firstName} {user.lastName}
          </div>
          <br />
          {user.email && (
            <p>
              {user.recentExperience?.name} | {user.email} | {user.phone}
            </p>
          )}
        </div>
      </div>
      <div className={styles.subBody}>
        <div className={styles.sectionHeader}>Skills and interests</div>
        {user.length === 0 ? (
          <CircularProgress />
        ) : (
          user.proficiencyWiseSkills.map((skill, index) => {
            return <Section userId={user.userId} key={index} skill={skill} />;
          })
        )}
      </div>
    </div>
  );
};

export default UserHomePage;
