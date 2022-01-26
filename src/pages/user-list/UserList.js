import React from 'react';
import Section from '../../components/section/Section';
import { useAppSelector } from '../../store/hooks';
import { selectUserList } from '../../store/user-list/selectors';
import { useAppDispatch } from '../../store/hooks';
import { getUserList } from '../../store/user-list/thunk';
import { getSkillsByUser } from '../../store/user/thunk';
import styles from './userList.module.scss';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userList = useAppSelector(selectUserList);

  React.useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <div className={styles.container}>
      {userList.length === 0 ? (
        <CircularProgress />
      ) : (
        userList.map((user, index) => {
          return (
            <Card
              onClick={() => {
                dispatch(getSkillsByUser(user.id));
                navigate(`/`);
              }}
              className={styles.card}
              elevation={3}
            >
              <div className={styles.cardContainer}>
                <CardMedia
                  className={styles.profilePicture}
                  image={user.profilePicture}
                  alt="green iguana"
                />
                <CardContent className={styles.cardSection}>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.firstName} {user.lastName}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    {user.recentExperience?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.phone}
                  </Typography>
                  <Typography variant="body2" className={styles.active}>
                    {
                      user.status === 1? "Active" : "Inactive" 
                    }
                  </Typography>
                </CardContent>
              </div>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default UserList;
