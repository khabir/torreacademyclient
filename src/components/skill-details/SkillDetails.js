import React from 'react';
import Dialog from '@mui/material/Dialog';
import styles from './skillDetails.module.scss';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector } from '../../store/hooks';
import { selectSkillDetails } from '../../store/skillDetails/selectors';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import { selectUserSkills } from '../../store/user/selectors';

const SkillDetails = ({ open, handleClose }) => {
  const skillDetails = useAppSelector(selectSkillDetails);
  const user = useAppSelector(selectUserSkills);

  if (skillDetails.length === 0) {
    return (
      <div className={styles.spinner}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <AppBar className={styles.appBar} sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {skillDetails.skillName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper sx={{ backgroundColor: '#e7ebf0' }}>
        <div className={styles.container}>
          <div className={styles.displayFlex}>
            <div className={styles.proficientName}>Proficiency:</div>
            <div className={styles.proficientName}>
              {skillDetails.skillProficiency}
            </div>
          </div>
          <Divider />
          <div className={styles.topPadding}>
            <div className={styles.userFirstName}>
              {user.firstName}
              's related experiences
            </div>
            <div>
              {skillDetails.userExperiences &&
                skillDetails.userExperiences?.map((exp, index) => (
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {exp.name}
                    </Typography>
                    <Typography variant="body2">{exp.organization}</Typography>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                      {exp.fromMonth} {exp.fromYear} - {exp.toMonth}{' '}
                      {exp.toYear}
                    </Typography>
                  </CardContent>
                ))}
            </div>
          </div>
          <Divider />
          {skillDetails.relatedUsers.length !== 0 && (
            <div className={styles.topPadding}>
              <div className={styles.userFirstName}>
                Other people with this skill
              </div>
              <div className={styles.card}>
                {skillDetails.relatedUsers.map((person, index) => (
                  <CardContent className={styles.bottomCard}>
                    <div>
                      <img
                        src="https://res.cloudinary.com/torre-technologies-co/image/upload/v1639488123/origin/starrgate/users/profile_11a5c5529ba466f078040470dec3ef951840c09a.jpg"
                        alt={person.firstName}
                        className={styles.profilePicture}
                      />
                    </div>
                    <div>
                      <Typography variant="h5" component="div">
                        {person.firstName} {person.lastName}
                      </Typography>
                      <Typography variant="body2">
                        {person.designation}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {person.isVerified ? 'Verified' : 'Not verified'}
                      </Typography>
                    </div>
                  </CardContent>
                ))}
              </div>
            </div>
          )}
        </div>
      </Paper>
    </Dialog>
  );
};

export default SkillDetails;
