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
import getKeyByValue from '../../helper/getKeyByValue';
import getTheFirstWord from '../../helper/getTheFirstWord';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';

const SkillDetails = ({ open, handleClose }) => {
  const skillDetails = useAppSelector(selectSkillDetails);

  if (skillDetails.length === 0) {
    return (
      <div className={styles.spinner}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <AppBar sx={{ position: 'relative' }}>
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
            {skillDetails.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.container}>
        <div className={styles.displayFlex}>
          <div className={styles.proficientName}>
            {getKeyByValue(skillDetails, skillDetails.profi)}:
          </div>
          <div className={styles.proficientName}>{skillDetails.profi}</div>
        </div>
        <Divider />
        <div className={styles.topPadding}>
          <div className={styles.userFirstName}>
            {skillDetails.userName && getTheFirstWord(skillDetails.userName)}'s
            related experiences
          </div>
          {skillDetails.experience &&
            skillDetails.experience?.map((exp, index) => (
              <div style={{ marginBottom: 20 }} key={index}>
                <Card sx={{ maxWidth: 400, padding: 1 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {exp.name}
                    </Typography>
                    <Typography variant="body2">
                      {exp.organizationName}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {exp.duration}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
        </div>
        <Divider />
        <div className={styles.topPadding}>
          <div className={styles.userFirstName}>
            {skillDetails &&
              skillDetails.peopleWithSameSkill &&
              skillDetails.peopleWithSameSkill.length > 0 &&
              'Other people with this skill'}
          </div>
          {skillDetails &&
            skillDetails.peopleWithSameSkill?.map((person, index) => (
              <div style={{ marginBottom: 20 }} key={index}>
                <Card sx={{ maxWidth: 200, padding: 1 }}>
                  <CardContent>
                    <img
                      src={person.image}
                      alt={person.name}
                      className={styles.profilePicture}
                    />
                    <Typography variant="h5" component="div">
                      {person.name}
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
                  </CardContent>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </Dialog>
  );
};

export default SkillDetails;
