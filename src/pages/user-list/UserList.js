import React from 'react';
import Section from '../../components/section/Section';
import { useAppSelector } from '../../store/hooks';
import { selectUserList } from '../../store/user-list/selectors';
import { useAppDispatch } from '../../store/hooks';
import { getUserList } from '../../store/user-list/thunk';
import styles from './userList.module.scss';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const UserList = () => {
  const dispatch = useAppDispatch();

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
            <Card className={styles.card} elevation={3}>
              <div className={styles.cardContainer}>
                <CardMedia
                  className={styles.profilePicture}
                  image="https://res.cloudinary.com/torre-technologies-co/image/upload/v1639488123/origin/starrgate/users/profile_11a5c5529ba466f078040470dec3ef951840c09a.jpg"
                  alt="green iguana"
                />
                <CardContent className={styles.cardSection}>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.firstName} {user.lastName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.phone}
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
