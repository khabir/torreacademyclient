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
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { getSkillsByUser } from '../../store/user/thunk';

const SkillDetails = ({ open, handleClose }) => {
  const skillDetails = useAppSelector(selectSkillDetails);
  const user = useAppSelector(selectUserSkills);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
                  <CardContent className={styles.displayFlex} key={index}>
                    <div className={styles.image}>
                      <img width={80} src="./exp.png" alt="" />
                    </div>
                    <div>
                      <Typography variant="h5" component="div">
                        {exp.name}
                      </Typography>
                      <Typography variant="h6">
                        {exp.organization.name}
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        {exp.fromMonth} {exp.fromYear} - {exp.toMonth}{' '}
                        {exp.toYear}
                      </Typography>
                    </div>
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
                  <CardContent key={index} className={styles.bottomCard} onClick={() => {
                    debugger;
                    dispatch(getSkillsByUser(user.userId));
                    navigate(`/`);
                  }}>
                    <div>
                      <img
                        src={person.profilePicture}
                        alt={person.firstName}
                        className={styles.profilePicture}
                      />
                    </div>
                    <div>
                      <Typography variant="h5" component="div">
                        {person.firstName} {person.lastName}
                      </Typography>
                      <Typography variant="body2">
                        {person.recentExperience.name}
                      </Typography>
                      <Typography variant="body2" className={styles.active}>
                    {
                      user.status
                    }
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
