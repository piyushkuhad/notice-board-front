import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: '10px',
    //padding: theme.spacing(1, 0),
    backgroundColor: fade(theme.palette.common.black, 0.1),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.1),
    },
    marginRight: 0,
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(2, 1, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
  },
}));

const initialLocations = [
  'Gurgaon',
  'Noida Sector-8',
  'Vasant Kunj-Dlf Promenade',
  'Shahdara',
];

const SearchBox = ({ initialValues }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState(initialValues);

  React.useState(() => {
    setValues({ ...values, searchResults: initialLocations });
  }, []);

  const onFieldChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.search + ' cm-search-box-container'}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={onFieldChange}
        name="mainSearch"
      />
    </div>
  );
};

SearchBox.defaultProps = {
  initialValues: {
    mainSearch: '',
    searchResults: [],
  },
};

export default SearchBox;
