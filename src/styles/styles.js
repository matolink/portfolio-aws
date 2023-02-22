import { makeStyles } from '@material-ui/styles';

const styles = () => {
    return {
      toolBar: {
        height: '10vh',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        backgroundColor: 'black',
      },
      logo: {
        color: 'red',
        cursor: 'pointer',
      },
      link: {
        color: '#FFF',
      },
    };
  };
   
  const useStyles = makeStyles(styles);
  export default useStyles; 