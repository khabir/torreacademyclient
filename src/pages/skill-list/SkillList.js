import React from 'react';
import Section from '../../components/section/Section';
import { useAppSelector } from '../../store/hooks';
import { selectSkillList } from '../../store/skill-list/selectors';
import { useAppDispatch } from '../../store/hooks';
import { getSkillList } from '../../store/skill-list/thunk';
// import { getSkill } from '../../store/skill/thunk';
import styles from './skillList.module.scss';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const SkillList = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const skillList = useAppSelector(selectSkillList);

    React.useEffect(() => {
        dispatch(getSkillList());
    }, []);

    return (
        <div className={styles.container}>
            {skillList.length === 0 ? (
                <CircularProgress />
            ) : (
                skillList.map((skill, index) => {
                    return (
                        <Card
                            onClick={() => {
                                //dispatch(getSkill(skill.id));
                                //navigate(`/`);
                                alert('Sorry !!! could not implement it.')
                            }}
                            className={styles.card}
                            elevation={3}
                        >
                            <div className={styles.cardContainer}>
                                <CardMedia
                                    className={styles.profilePicture}
                                    image="./skill.jpg"
                                    alt="green iguana"
                                />
                                <CardContent className={styles.cardSection}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {skill.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {skill.email}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {skill.phone}
                                    </Typography>
                                    <Typography variant="body2" className={styles.active}>
                                        {
                                            skill.status === 1 ? "Active" : "Inactive"
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


export default SkillList;
