import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <Paper
      component='form'
      sx={{
        backgroundColor: 'roleski.secondary',
        padding: '0.14rem',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: '2rem',
      }}
    >
      <InputBase
        sx={{
          flex: 1,
        }}
        placeholder='Czego szukasz?'
        inputProps={{
          sx: {
            textAlign: 'center',
          },
        }}
      />
      <IconButton type='button'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
