
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import PageviewIcon from '@mui/icons-material/Pageview';

export default function TodoListItem({ todo, clickHandler }) {
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <IconButton
          edge='end'
          aria-label='details'
        >
          <PageviewIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        role={undefined}
        onClick={() => clickHandler(todo)}
        dense
      >
        <ListItemIcon>
          <Checkbox
            edge='start'
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          primary={`Line item ${todo.todo}`}
        />
      </ListItemButton>
    </ListItem>
  );
}
